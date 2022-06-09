import { MuaDto } from './dto/mua.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MuaService {
    constructor(private prisma: PrismaService) {}
    async getAllmua() {
      return await this.prisma.mua.findMany();
    }
    async getmuaById(id: string) {
      return await this.prisma.mua.findUnique({
        where: {
          id: id,
        },
      });
    }
  
    async addmua(bai: MuaDto, gia: number) {
      return await this.prisma.mua.create({
        data: {
          ...bai,
          gia: gia,
        },
      });
    }
    async updatemua(bai: MuaDto, gia: number, id: string) {
      return await this.prisma.mua.update({
        data: {
          ...bai,
          gia: gia,
        },
        where: {
          id: id,
        },
      });
    }
    async deletemua(id: string) {
      return await this.prisma.mua.delete({
        where: {
          id: id,
        },
      });
    }
}
