import { NhanvienDto } from './dto/nhanvien.dto';
import { AuthDto } from './dto/auth.dto';
import { NhanvienService } from './nhanvien.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('nhanvien')
export class NhanvienController {
  constructor(private nhanvien: NhanvienService) {}
  @Post('/dangky')
  DangKy(@Body() dto: AuthDto) {
    return this.nhanvien.DangKy(dto);
  }
  @Post('/dangnhap')
  DangNhap(@Body() dto: AuthDto) {
    return this.nhanvien.DangNhap(dto);
  }

  @Get()
  getAllHang() {
    return this.nhanvien.getAllnhanVien();
  }
  @Get(':id')
  getHangById(@Param('id') id: string) {
    return this.nhanvien.getnhanVienById(id);
  }
  @Post()
  addHang(@Body() casi: NhanvienDto) {
    return this.nhanvien.addnhanVien(casi);
  }
  @Patch(':id')
  updateHang(@Body() casi: NhanvienDto, @Param('id') id: string) {
    return this.nhanvien.updatenhanVien(casi, id);
  }
  @Delete(':id')
  deleteHang(@Param('id') id: string) {
    return this.nhanvien.deletenhanVien(id);
  }
}
