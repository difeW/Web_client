import { TienLuongDto } from './dto/tienluong.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TienluongcasiService {
  constructor(private prisma: PrismaService) {}
  async getAlltienLuongCaSi() {
    return await this.prisma.tienLuongCaSi.findMany();
  }
  async gettienLuongCaSiById(id: string) {
    return await this.prisma.tienLuongCaSi.findUnique({
      where: {
        id: id,
      },
    });
  }

  async addtienLuongCaSi(luong: TienLuongDto) {
    return await this.prisma.tienLuongCaSi.create({
      data: {
        ...luong,
      },
    });
  }
  async updatetienLuongCaSi(luong: TienLuongDto, id: string) {
    return await this.prisma.tienLuongCaSi.update({
      data: {
        ...luong,
      },
      where: {
        id: id,
      },
    });
  }
  async deletetienLuongCaSi(id: string) {
    return await this.prisma.tienLuongCaSi.delete({
      where: {
        id: id,
      },
    });
  }
}
