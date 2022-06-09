import { IsString } from 'class-validator';
export class MuaDto {
  @IsString()
  ngayMua: string;
  @IsString()
  maKh: string;
  @IsString()
  maBH: string;
}
