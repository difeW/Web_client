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
          data: { taiKhoan: dto.taiKhoan, matKhau: hash },
        });
        return {
          success: true,
          mess: 'tao tai khoan thanh cong',
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
      };
    }
}