import { IsInt, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
export class TienLuongDto {
  @IsString()
  ghiChu: string;
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  thangGhiNhan: number;
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  namGhiNhan: number;
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  tienShow: number;
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  tienBaiHat: number;
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  luong: number;
  @IsString()
  maCS: string;
}
