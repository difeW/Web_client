import { HangService } from './hang.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';


@Controller('hang')
export class HangController {
  constructor(private hang: HangService) {}
  @Get()
  getAllHang() {
    return this.hang.getAllHang();
  }
  @Get(':id')
  getHangById(@Param('id') id: string) {
    return this.hang.getHangById(id);
  }
  @Post()
  addHang(
    @Body('tenHang') tenhang: string,
    @Body('chietKhau', ParseIntPipe) chietkhau: number,
    @Body('giaMoiShow', ParseIntPipe) gia: number,
  ) {
    return this.hang.addHang(tenhang, chietkhau, gia);
  }
  @Patch(':id')
  updateHang(
    @Body('tenHang') tenhang: string,
    @Body('chietKhau', ParseIntPipe) chietkhau: number,
    @Body('giaMoiShow', ParseIntPipe) gia: number,
    @Param('id') id: string,
  ) {
    return this.hang.updateHang(tenhang, chietkhau, gia, id);
  }
  @Delete(':id')
  deleteHang(@Param('id') id: string) {
    return this.hang.deleteHang(id);
  }
}
