import { caSiShowDto } from './dto/casishow.dto';
import { CasitrongshowService } from './casitrongshow.service';

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
@Controller('casishow')
export class CasitrongshowController {
  constructor(private casishow: CasitrongshowService) {}
  @Get()
  getAllHang() {
    return this.casishow.getAllcaSiTrongShow();
  }
  @Get(':id')
  getHangById(@Param('id') id: string) {
    return this.casishow.getcaSiTrongShowById(id);
  }
  @Post()
  addHang(@Body() casi: caSiShowDto) {
    return this.casishow.addcaSiTrongShow(casi);
  }
  @Patch(':id')
  updateHang(@Body() casi: caSiShowDto, @Param('id') id: string) {
    return this.casishow.updatecaSiTrongShow(casi, id);
  }
  @Delete(':id')
  deleteHang(@Param('id') id: string) {
    return this.casishow.deletecaSiTrongShow(id);
  }
}
