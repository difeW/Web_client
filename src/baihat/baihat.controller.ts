import { BaiHatDto } from './dto/baihat.dto';
import { BaihatService } from './baihat.service';
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


@Controller('baihat')
export class BaihatController {
  constructor(private baihat: BaihatService) {}
  @Get()
  getAllBaiHat() {
    return this.baihat.getAllBaiHat();
  }
  @Get(':id')
  getBaiHatById(@Param('id') id: string) {
    return this.baihat.getBaiHatById(id);
  }
  @Post()
  addBaiHat(
    @Body() bai: BaiHatDto,
    @Body('gia', ParseIntPipe) gia: number,
  ) {
    return this.baihat.addBaiHat(bai, gia);
  }
  @Patch(':id')
  updateBaiHat(
    @Body() bai: BaiHatDto,
    @Body('gia', ParseIntPipe) gia: number,
    @Param('id') id: string,
  ) {
    return this.baihat.updateBaiHat(bai,gia, id);
  }
  @Delete(':id')
  deleteBaiHat(@Param('id') id: string) {
    return this.baihat.deleteBaiHat(id);
  }
}
