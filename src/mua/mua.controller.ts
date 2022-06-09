import { MuaDto } from './dto/mua.dto';
import { MuaService } from './mua.service';
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

@Controller('mua')
export class MuaController {
  constructor(private mua: MuaService) {}
  @Get()
  getAllHang() {
    return this.mua.getAllmua();
  }
  @Get(':id')
  getHangById(@Param('id') id: string) {
    return this.mua.getmuaById(id);
  }
  @Post()
  addHang(@Body() mua: MuaDto, @Body('gia', ParseIntPipe) gia: number) {
    return this.mua.addmua(mua, gia);
  }
  @Patch(':id')
  updateHang(
    @Body() mua: MuaDto,
    @Body('gia', ParseIntPipe) gia: number,
    @Param('id') id: string,
  ) {
    return this.mua.updatemua(mua, gia, id);
  }
  @Delete(':id')
  deleteHang(@Param('id') id: string) {
    return this.mua.deletemua(id);
  }
}
