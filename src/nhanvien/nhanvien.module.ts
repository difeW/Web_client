import { NhanvienController } from './nhanvien.controller';
import { Module } from '@nestjs/common';
import { NhanvienService } from './nhanvien.service';

@Module({
  providers: [NhanvienService],
  controllers: [NhanvienController]
})
export class NhanvienModule {}
