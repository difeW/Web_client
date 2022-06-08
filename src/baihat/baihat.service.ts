import { BaiHatDto } from './dto/baihat.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BaihatService {
  constructor(private prisma: PrismaService) {}
  async getAllBaiHat() {
    return await this.prisma.baiHat.findMany();
  }
  async getBaiHatById(id: string) {
    return await this.prisma.baiHat.findUnique({
      where: {
        id: id,
      },
    });
  }

  async addBaiHat(bai: BaiHatDto, gia: number) {
    return await this.prisma.baiHat.create({
      data: {
        ...bai,
        luotMua: 0,
        luotView: 0,
        gia: gia,
      },
    });
  }
  async updateBaiHat(bai: BaiHatDto, doanhthu: number, id: string) {
    return await this.prisma.baiHat.update({
      data: {
        ...bai,
        gia: doanhthu,
      },
      where: {
        id: id,
      },
    });
  }
  async deleteBaiHat(id: string) {
    return await this.prisma.baiHat.delete({
      where: {
        id: id,
      },
    });
  }
}
