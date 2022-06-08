import { CasiDto } from './dto/casi.dto';
import { CasiService } from './casi.service';

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

@Controller('casi')
export class CasiController {
  constructor(private casi: CasiService) {}
  @Get()
  getAllCaSi() {
    return this.casi.getAllCaSi();
  }
  @Get(':id')
  getHangById(@Param('id') id: string) {
    return this.casi.getCaSiById(id);
  }
  @Post()
  addHang(
    @Body() casi: CasiDto,
    @Body('doanhThu', ParseIntPipe) doanhThu: number,
    @Body('luongCB', ParseIntPipe) luongCB: number,
  ) {
    return this.casi.addCaSi(casi, doanhThu, luongCB);
  }
  @Patch(':id')
  updateHang(
    @Body() casi: CasiDto,
    @Body('doanhThu', ParseIntPipe) doanhThu: number,
    @Body('luongCB', ParseIntPipe) luongCB: number,
    @Param('id') id: string,
  ) {
    return this.casi.updateCaSi(casi, doanhThu, luongCB, id);
  }
  @Delete(':id')
  deleteHang(@Param('id') id: string) {
    return this.casi.deleteCaSi(id);
  }
}
