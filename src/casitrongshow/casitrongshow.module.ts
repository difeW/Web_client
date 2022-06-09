import { Module } from '@nestjs/common';
import { CasitrongshowController } from './casitrongshow.controller';
import { CasitrongshowService } from './casitrongshow.service';

@Module({
  controllers: [CasitrongshowController],
  providers: [CasitrongshowService]
})
export class CasitrongshowModule {}
