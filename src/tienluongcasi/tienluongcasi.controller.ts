import { TienLuongDto } from './dto/tienluong.dto';
import { TienluongcasiService } from './tienluongcasi.service';
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

@Controller('luong')
export class TienluongcasiController {
  constructor(private luong: TienluongcasiService) {}
  @Get()
  getAllHang() {
    return this.luong.getAlltienLuongCaSi();
  }
  @Get(':id')
  getHangById(@Param('id') id: string) {
    return this.luong.gettienLuongCaSiById(id);
  }
  @Post()
  addHang(@Body() luong: TienLuongDto) {
    return this.luong.addtienLuongCaSi(luong);
  }
  @Patch(':id')
  updateHang(@Body() luong: TienLuongDto, @Param('id') id: string) {
    return this.luong.updatetienLuongCaSi(luong, id);
  }
  @Delete(':id')
  deleteHang(@Param('id') id: string) {
    return this.luong.deletetienLuongCaSi(id);
  }
}
