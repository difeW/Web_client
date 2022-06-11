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
}
