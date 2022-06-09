import { Module } from '@nestjs/common';
import { TienluongcasiController } from './tienluongcasi.controller';
import { TienluongcasiService } from './tienluongcasi.service';

@Module({
  controllers: [TienluongcasiController],
  providers: [TienluongcasiService]
})
export class TienluongcasiModule {}
