import { ShowDienDto } from './dto/showdien.dto';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ShowdienService {
  constructor(private prisma: PrismaService) {}
  async getAllShow() {
    return await this.prisma.showDien.findMany();
  }
  async getShowById(id: string) {
    return await this.prisma.showDien.findUnique({
      where: {
        id: id,
      },
    });
  }

  async addShow(show: ShowDienDto, chiPhi: number) {
    return await this.prisma.showDien.create({
      data: {
        ...show,
        tinhTrang: 'chưa xác nhận',
        chiPhi,
      },
    });
  }
  async updateShow(show: ShowDienDto, chiPhi: number, id: string) {
    return await this.prisma.showDien.update({
      data: {
        ...show,
        chiPhi: chiPhi,
      },
      where: {
        id: id,
      },
    });
  }
  async deleteShow(id: string) {
    return await this.prisma.showDien.delete({
      where: {
        id: id,
      },
    });
  }
  async verifiedShow(id: string) {
    //huy / chuaxacnhan / danhan/ daden
    const status = await this.prisma.showDien.findUnique({
      where: {
        id: id,
      },
    });
    try {
      if (status.tinhTrang == 'đã nhận') {
        await this.prisma.showDien.update({
          where: {
            id: id,
          },
          data: {
            tinhTrang: 'đã đến',
          },
        });
      } else if (status.tinhTrang == 'chưa xác nhận') {
        await this.prisma.showDien.update({
          where: {
            id: id,
          },
          data: {
            tinhTrang: 'đã nhận',
          },
        });
      }
      return {
        success: true,
        mess: 'cap nhat thanh cong',
      };
    } catch (error) {
      return {
        success: false,
        mess: 'thất bại',
        err: error,
      };
    }
  }
  async toCancel(id: string) {
    await this.prisma.showDien.update({
      where: {
        id: id,
      },
      data: {
        tinhTrang: 'hủy',
      },
    });
  }
}
