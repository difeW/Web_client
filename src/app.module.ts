import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { HangModule } from './hang/hang.module';
import { CasiModule } from './casi/casi.module';
import { BaihatModule } from './baihat/baihat.module';
import { NhanvienModule } from './nhanvien/nhanvien.module';
import { KhachhangModule } from './khachhang/khachhang.module';
import { ShowdienModule } from './showdien/showdien.module';
import { MuaModule } from './mua/mua.module';
import { TienluongcasiModule } from './tienluongcasi/tienluongcasi.module';
import { CasitrongshowModule } from './casitrongshow/casitrongshow.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    HttpModule,
    HangModule,
    CasiModule,
    BaihatModule,
    NhanvienModule,
    KhachhangModule,
    ShowdienModule,
    MuaModule,
    TienluongcasiModule,
    CasitrongshowModule,
  ],
})
export class AppModule {}
