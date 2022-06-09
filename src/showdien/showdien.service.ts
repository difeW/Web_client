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
}
