import { CasiDto } from './dto/casi.dto';

import { Hang } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CasiService {
  constructor(private prisma: PrismaService) {}
  async getAllCaSi() {
    const casi = await this.prisma.casi.findMany();
    let res = [];
    for await (let ca of casi) {
      let hang = await this.prisma.hang.findUnique({
        where: {
          id: ca.maHang,
        },
      });
      res.push({
        id: ca.id,
        hoTen: ca.hoTen,
        ngaySinh: ca.ngaySinh,
        gioiTinh: ca.gioiTinh,
        hinhAnh: ca.hinhAnh,
        maHang: hang.tenHang,
        giaMoiShow: hang.giaMoiShow,
      });
    }
    return res;
  }
  async getCaSiById(id: string) {
    const ca = await this.prisma.casi.findUnique({
      where: {
        id: id,
      },
    });
    let res = [];

    const hang = await this.prisma.hang.findUnique({
      where: {
        id: ca.maHang,
      },
    });
    const baihat = await this.prisma.baiHat.findMany({
      where: {
        maCS: ca.id,
      },
    });
    let baihatcus = [];
    for (let bh of baihat) {
      baihatcus.push(bh);
    }
    res.push({
      id: ca.id,
      hoTen: ca.hoTen,
      ngaySinh: ca.ngaySinh,
      CMND: ca.CMND,
      diaChi: ca.diaChi,
      gioiTinh: ca.gioiTinh,
      luongCB: ca.luongCB,
      ngayVao: ca.ngayVao,
      moTa: ca.moTa,
      sdt: ca.sdt,
      hinhAnh: ca.hinhAnh,
      maHang: hang.tenHang,
      tenBh: baihatcus,
    });

    return res;
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
