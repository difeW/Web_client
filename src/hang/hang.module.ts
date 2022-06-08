import { Module } from '@nestjs/common';
import { HangController } from './hang.controller';
import { HangService } from './hang.service';

@Module({
  controllers: [HangController],
  providers: [HangService]
})
export class HangModule {}
