import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { HangModule } from './hang/hang.module';
import { CasiModule } from './casi/casi.module';
import { BaihatModule } from './baihat/baihat.module';

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
  ],
})
export class AppModule {}
