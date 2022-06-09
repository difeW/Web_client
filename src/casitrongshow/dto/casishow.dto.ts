import { IsInt, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
export class caSiShowDto {
  @IsString()
  maShow: string;
  @IsString()
  maCS: string;
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  thuTu: number;
  @IsString()
  tinhTrang: string;
  @IsString()
  ghiChu: string;
}
