import { TienLuongDto } from './dto/tienluong.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TienluongcasiService {
  constructor(private prisma: PrismaService) {}
  async getAlltienLuongCaSi() {
    const luong = await this.prisma.tienLuongCaSi.findMany();
    let res = [];
    for await (const l of luong) {
      const casi = await this.prisma.casi.findUnique({
        where: {
          id: l.maCS,
        },
      });
      res.push({
        id: l.id,
        maCS: casi.hoTen,
        thangGhiNhan: l.thangGhiNhan,
        namGhiNhan: l.namGhiNhan,
        tienShow: l.tienShow,
        ghiChu: l.ghiChu,
        tienBaiHat: l.tienBaiHat,
        luong: l.luong,
      });
    }
    return res;
  }
  async gettienLuongCaSiById(id: string) {
    const l = await this.prisma.tienLuongCaSi.findUnique({
      where: {
        id: id,
      },
    });
    const casi = await this.prisma.casi.findUnique({
      where: {
        id: l.maCS,
      },
    });
    return {
      id: l.id,
      maCS: casi.hoTen,
      thangGhiNhan: l.thangGhiNhan,
      namGhiNhan: l.namGhiNhan,
      tienShow: l.tienShow,
      ghiChu: l.ghiChu,
      tienBaiHat: l.tienBaiHat,
      luong: l.luong,
    };
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
