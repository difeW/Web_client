import { KhachhangService } from './khachhang.service';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from 'src/nhanvien/dto/auth.dto';

@Controller('khachhang')
export class KhachhangController {
  constructor(private khachhang: KhachhangService) {}
  @Post('/dangky')
  DangKy(@Body() dto: AuthDto) {
    return this.khachhang.DangKy(dto);
  }
  @Post('/dangnhap')
  DangNhap(@Body() dto: AuthDto) {
    return this.khachhang.DangNhap(dto);
  }
}
