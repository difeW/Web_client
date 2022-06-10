import { IsString } from 'class-validator';
export class MuaDto {
  @IsString()
  maKH: string;
  @IsString()
  maBH: string;
}
