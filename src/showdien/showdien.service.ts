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
    //huy / chuaxacnhan / xacnhan
    const status = await this.prisma.showDien.findUnique({
      where: {
        id: id,
      },
    });
    try {
      if (status.tinhTrang == 'chưa xác nhận') {
        await this.prisma.showDien.update({
          where: {
            id: id,
          },
          data: {
            tinhTrang: 'xác nhận',
          },
        });
        const casitrongshow = await this.prisma.caSiTrongShow.findMany({
          where: {
            maShow: id,
          },
        });

        for await (const casi of casitrongshow) {
          let hangcasi = await this.prisma.casi.findUnique({
            where: {
              id: casi.maCS,
            },
          });
          let hang = await this.prisma.hang.findUnique({
            where: {
              id: hangcasi.maHang,
            },
          });
          const tienShow = hang.giaMoiShow;
          const thang = new Date(status.ngayBatDau).getMonth();
          const nam = new Date(status.ngayBatDau).getFullYear();
          const tienluongcasi = await this.prisma.tienLuongCaSi.findFirst({
            where: {
              maCS: casi.maCS,
              thangGhiNhan: thang,
              namGhiNhan: nam,
            },
          });
          if (!tienluongcasi) {
            await this.prisma.tienLuongCaSi.create({
              data: {
                maCS: casi.maCS,
                thangGhiNhan: thang,
                namGhiNhan: nam,
                tienShow: tienShow,
                tienBaiHat: 0,
                luong: hangcasi.luongCB + tienShow * (hang.chietKhau / 100),
                ghiChu: '',
              },
            });
          } else {
            await this.prisma.tienLuongCaSi.update({
              where: {
                id: tienluongcasi.id,
              },
              data: {
                tienShow: tienluongcasi.tienShow + tienShow,
                luong:
                  hangcasi.luongCB +
                  (tienluongcasi.tienBaiHat +
                    tienluongcasi.tienShow +
                    tienShow) *
                    (hang.chietKhau / 100),
              },
            });
          }
        }
      }
      return {
        success: true,
        mess: 'cập nhật thành công',
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
    const status = await this.prisma.showDien.findUnique({
      where: {
        id: id,
      },
    });
    try {
      if (status.tinhTrang == 'chưa xác nhận') {
        await this.prisma.showDien.update({
          where: {
            id: id,
          },
          data: {
            tinhTrang: 'đã hủy',
          },
        });
      }
      return {
        success: true,
        mess: 'cập nhật thành công',
      };
    } catch (error) {
      return {
        success: false,
        mess: 'thất bại',
        err: error,
      };
    }
  }
}
