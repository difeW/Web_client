import { caSiShowDto } from './dto/casishow.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CasitrongshowService {
  constructor(private prisma: PrismaService) {}
  async getAllcaSiTrongShow() {
    return await this.prisma.caSiTrongShow.findMany();
  }
  async getcaSiTrongShowById(id: string) {
    return await this.prisma.caSiTrongShow.findUnique({
      where: {
        id: id,
      },
    });
  }

  async addcaSiTrongShow(luong: caSiShowDto) {
    return await this.prisma.caSiTrongShow.create({
      data: {
        ...luong,
      },
    });
  }
  async updatecaSiTrongShow(luong: caSiShowDto, id: string) {
    return await this.prisma.caSiTrongShow.update({
      data: {
        ...luong,
      },
      where: {
        id: id,
      },
    });
  }
  async deletecaSiTrongShow(id: string) {
    return await this.prisma.caSiTrongShow.delete({
      where: {
        id: id,
      },
    });
  }
}
