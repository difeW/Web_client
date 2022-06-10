import { KhachHangDto } from './dto/khachhang.dto';
import { KhachhangService } from './khachhang.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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

  @Get()
  getAllHang() {
    return this.khachhang.getAllkhachHang();
  }
  @Get(':id')
  getHangById(@Param('id') id: string) {
    return this.khachhang.getkhachHangById(id);
  }
  @Post()
  addHang(@Body() casi: KhachHangDto) {
    return this.khachhang.addkhachHang(casi);
  }
  @Patch(':id')
  updateHang(@Body() casi: KhachHangDto, @Param('id') id: string) {
    return this.khachhang.updatekhachHang(casi, id);
  }
  @Delete(':id')
  deleteHang(@Param('id') id: string) {
    return this.khachhang.deletekhachHang(id);
  }

  @Get('/baihat/:id')
  getListMusic(@Param('id') id: string) {
    return this.khachhang.getListMusic(id);
  }
}
