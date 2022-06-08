import { Hang } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HangService {
  constructor(private prisma: PrismaService) {}
  async getAllHang() {
    return await this.prisma.hang.findMany();
  }
  async getHangById(id: string) {
    return await this.prisma.hang.findUnique({
      where: {
        id: id,
      },
    });
  }

  async addHang(ten: string, chietkhau: number, gia: number) {
    return await this.prisma.hang.create({
      data: {
        tenHang: ten,
        chietKhau: chietkhau,
        giaMoiShow: gia,
      },
    });
  }
  async updateHang(ten: string, chietkhau: number, gia: number, id: string) {
    return await this.prisma.hang.update({
      data: {
        tenHang: ten,
        chietKhau: chietkhau,
        giaMoiShow: gia,
      },
      where: {
        id: id,
      },
    });
  }
  async deleteHang(id: string) {
    return await this.prisma.hang.delete({
      where: {
        id: id,
      },
    });
  }
}
