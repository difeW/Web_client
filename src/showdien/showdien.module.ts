import { Module } from '@nestjs/common';
import { ShowdienController } from './showdien.controller';
import { ShowdienService } from './showdien.service';

@Module({
  controllers: [ShowdienController],
  providers: [ShowdienService]
})
export class ShowdienModule {}
