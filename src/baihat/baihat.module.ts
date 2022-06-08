import { Module } from '@nestjs/common';
import { BaihatController } from './baihat.controller';
import { BaihatService } from './baihat.service';

@Module({
  controllers: [BaihatController],
  providers: [BaihatService]
})
export class BaihatModule {}
