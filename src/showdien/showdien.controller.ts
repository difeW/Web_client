import { ShowDienDto } from './dto/showdien.dto';
import { ShowdienService } from './showdien.service';
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

@Controller('showdien')
export class ShowdienController {
  constructor(private show: ShowdienService) {}
  @Get()
  getAllShowDien() {
    return this.show.getAllShow();
  }

  @Get(':id')
  getShowById(@Param('id') id: string) {
    return this.show.getShowById(id);
  }

  @Post()
  addShow(
    @Body() dto: ShowDienDto,
    @Body('chiPhi', ParseIntPipe) chiPhi: number,
  ) {
    return this.show.addShow(dto, chiPhi);
  }

  @Patch(':id')
  updateShow(
    @Body() dto: ShowDienDto,
    @Body('chiPhi', ParseIntPipe) chiPhi: number,
    @Param('id') id: string,
  ) {
    return this.show.updateShow(dto, chiPhi, id);
  }

  @Delete(':id')
  deleteShow(@Param('id') id: string) {
    return this.show.deleteShow(id);
  }
}
