import { Module } from '@nestjs/common';
import { MuaController } from './mua.controller';
import { MuaService } from './mua.service';

@Module({
  controllers: [MuaController],
  providers: [MuaService]
})
export class MuaModule {}
