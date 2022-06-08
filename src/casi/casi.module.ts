import { Module } from '@nestjs/common';
import { CasiController } from './casi.controller';
import { CasiService } from './casi.service';

@Module({
  controllers: [CasiController],
  providers: [CasiService]
})
export class CasiModule {}
