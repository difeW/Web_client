import { KhachHangDto } from './dto/khachhang.dto';
import { Injectable } from '@nestjs/common';
import { AuthDto } from 'src/nhanvien/dto/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
@Injectable()
export class KhachhangService {
  constructor(private prisma: PrismaService) {}
  async DangKy(dto: AuthDto) {
    //generate the password hash
    const hash = await argon.hash(dto.matKhau);
    //save new user in the db
    const acc = await this.prisma.khachHang.findUnique({
      where: {
        taiKhoan: dto.taiKhoan,
      },
    });
    if (acc) {
      return {
        success: false,
        mess: 'tai khoan da ton tai',
      };
    } else {
      const user = await this.prisma.khachHang.create({
        data: { taiKhoan: dto.taiKhoan, matKhau: hash, doanhThu: 0 },
      });
      return {
        success: true,
        mess: 'tao tai khoan thanh cong',
        makh: user.id,
      };
    }
  }
  async DangNhap(dto: AuthDto) {
    //find user by email
    const user = await this.prisma.khachHang.findUnique({
      where: {
        taiKhoan: dto.taiKhoan,
      },
    });
    if (!user) {
      return {
        success: false,
        mess: 'Tài khoản không có',
      };
    }
    //compare email input with db
    const pwMatches = await argon.verify(user.matKhau, dto.matKhau);
    // if (!pwMatches) throw new ForbiddenException('dung cos dang nhap nua hmu hmu');
    if (!pwMatches) {
      return {
        success: false,
        mess: 'Sai mật khẩu',
      };
    }
    return {
      success: true,
      mess: 'dang nhap thanh cong',
      makh: user.id,
    };
  }

  async getAllkhachHang() {
    return await this.prisma.khachHang.findMany();
  }
  async getkhachHangById(id: string) {
    return await this.prisma.khachHang.findUnique({
      where: {
        id: id,
      },
    });
  }

  async addkhachHang(luong: KhachHangDto) {
    return await this.prisma.khachHang.create({
      data: {
        ...luong,
      },
    });
  }
  async updatekhachHang(luong: KhachHangDto, id: string) {
    return await this.prisma.khachHang.update({
      data: {
        ...luong,
      },
      where: {
        id: id,
      },
    });
  }
  async deletekhachHang(id: string) {
    return await this.prisma.khachHang.delete({
      where: {
        id: id,
      },
    });
  }

  async getListMusic(id: string) {
    const khachhang = await this.prisma.mua.findMany({
      where: {
        maKH: id,
      },
    });
    const baihatcus = [];
    const baihat = await this.prisma.baiHat.findMany();
    for await (const bh of baihat) {
      const casi = await this.prisma.casi.findUnique({
        where: {
          id: bh.maCS,
        },
      });
      baihatcus.push({
        maBH: bh.id,
        tenBH: bh.tenBH,
        ngayPhatHanh: bh.ngayPhatHanh,
        hinhAnh: bh.hinhAnh,
        mp4: bh.mp4,
        luotView: bh.luotView,
        luotMua: bh.luotMua,
        gia: bh.gia,
        maCS: casi.hoTen,
        DaMua: false,
      });
    }
 

    for await (const kh of khachhang) {
      for await (const bh of baihatcus) {
        if (kh.maBH == bh.maBH) {
          bh.DaMua = true;
        }
      }
    }
    return baihatcus;
  }
}
