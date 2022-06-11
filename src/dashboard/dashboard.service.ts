import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}
  async getProfit() {
    const cus = await this.prisma.khachHang.findMany();
    let res = 0;
    for await (let c of cus) {
      res += c.doanhThu;
    }
    return res;
  }
  async getCustomer() {
    const cus = await this.prisma.khachHang.findMany({});
    return cus.length;
  }

  async getProduct() {
    const cus = await this.prisma.baiHat.findMany({});
    return cus.length;
  }

  async getSinger() {
    const cus = await this.prisma.casi.findMany({});
    return cus.length;
  }
  nestedSort =
    (prop1, prop2 = null, direction = 'asc') =>
    (e1, e2) => {
      const a = prop2 ? e1[prop1][prop2] : e1[prop1],
        b = prop2 ? e2[prop1][prop2] : e2[prop1],
        sortOrder = direction === 'asc' ? 1 : -1;
      return a < b ? -sortOrder : a > b ? sortOrder : 0;
    };

  async getTopCaSi() {
    const top = await this.prisma.tienLuongCaSi.groupBy({
      by: ['maCS', 'thangGhiNhan'],
      _sum: {
        tienBaiHat: true,
        tienShow: true,
      },
    });

    let res = [];
    for await (const t of top) {
      let s = 0;
      const casi = await this.prisma.casi.findUnique({
        where: {
          id: t.maCS,
        },
      });
      s += t._sum.tienBaiHat;
      s += t._sum.tienShow;
      const hang = await this.prisma.hang.findUnique({
        where: {
          id: casi.maHang,
        },
      });
      res.push({
        doanhso: s,
        hoTen: casi.hoTen,
        ngaySinh: casi.ngaySinh,
        hang: hang.tenHang,
      });
    }
    return res.sort(this.nestedSort('doanhso', null, 'desc'));
  }

  async getdoanhthunam() {
    let res = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    const top = await this.prisma.tienLuongCaSi.groupBy({
      by: ['thangGhiNhan'],
      _sum: {
        tienBaiHat: true,
        tienShow: true,
      },
    });
    let index = 0;
    for await (const t of top) {
      let s = 0;
      s += t._sum.tienBaiHat;
      s += t._sum.tienShow;
      res[t.thangGhiNhan] = s;

      ++index;
    }

    return res;
  }
}
