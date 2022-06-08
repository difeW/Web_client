import {
  IsString,
} from 'class-validator';
export class CasiDto {
  @IsString()
  hoTen: string;
  @IsString()
  sdt: string;
  @IsString()
  CMND: string;
  @IsString()
  diaChi: string;
  @IsString()
  gioiTinh: string;
  @IsString()
  maHang: string;
  @IsString()
  moTa: string;
  @IsString()
  hinhAnh: string;
  @IsString()
  ngaySinh: string;
}
