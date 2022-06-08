import { CasiDto } from './dto/casi.dto';

import { Hang } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CasiService {
  constructor(private prisma: PrismaService) {}
  async getAllCaSi() {
    return await this.prisma.casi.findMany();
  }
  async getCaSiById(id: string) {
    return await this.prisma.casi.findUnique({
      where: {
        id: id,
      },
    });
  }

  async addCaSi(casi: CasiDto, doanhthu: number, luong: number) {
    return await this.prisma.casi.create({
      data: {
        ...casi,
        doanhThu: doanhthu,
        luongCB: luong,
      },
    });
  }
  async updateCaSi(casi: CasiDto, doanhthu: number, luong: number, id: string) {
    return await this.prisma.casi.update({
      data: {
        ...casi,
        doanhThu: doanhthu,
        luongCB: luong,
      },
      where: {
        id: id,
      },
    });
  }
  async deleteCaSi(id: string) {
    return await this.prisma.casi.delete({
      where: {
        id: id,
      },
    });
  }
}
