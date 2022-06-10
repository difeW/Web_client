import { Module } from '@nestjs/common';
import { KhachhangController } from './khachhang.controller';
import { KhachhangService } from './khachhang.service';

@Module({
  controllers: [KhachhangController],
  providers: [KhachhangService],
})
export class KhachhangModule {}
