import { caSiShowDto } from './dto/casishow.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CasitrongshowService {
  constructor(private prisma: PrismaService) {}
  async getAllcaSiTrongShow() {
    const casishow = await this.prisma.caSiTrongShow.findMany();
    let res = [];
 
    for await (const css of casishow) {
   
      const cs = await this.prisma.casi.findUnique({
        where: {
          id: css.maCS,
        },
      });
      const s = await this.prisma.showDien.findUnique({
        where: {
          id: css.maShow,
        },
      });
      res.push({
        id: css.id,
        maCS: cs.hoTen,
        maShow: s.tenShow,
      });
    }
    return res;
  }
  async getcaSiTrongShowById(id: string) {
    const css = await this.prisma.caSiTrongShow.findUnique({
      where: {
        id: id,
      },
    });
    const cs = await this.prisma.casi.findUnique({
      where: {
        id: css.maCS,
      },
    });
    const s = await this.prisma.showDien.findUnique({
      where: {
        id: css.maShow,
      },
    });
    return {
      id: css.id,
      maCS: cs.hoTen,
      maShow: s.tenShow,
    };
  }

  async getCasiTrongShow(mashow: string) {
    const show = await this.prisma.caSiTrongShow.findMany({
      where: {
        maShow: mashow,
      },
    });

    let res = [];
    for await (const s of show) {
      const casi = await this.prisma.casi.findUnique({
        where: {
          id: s.maCS,
        },
      });
      const hang = await this.prisma.hang.findUnique({
        where: {
          id: casi.maHang,
        },
      });
      res.push({
        maCS : s.maCS,
        hoTen: casi.hoTen,
        giaMoiShow: hang.giaMoiShow,
      });
    }
    return res;
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
