import { IsInt, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
export class NhanvienDto {
  @IsString()
  taiKhoan: string;
  @IsString()
  tenNV: string;
  @IsString()
  matKhau: string;
  @IsString()
  email: string;
  @IsString()
  sdt: string;
  @IsString()
  ngaySinh: string;
  @IsString()
  diaChi: string;
  cmnd: string;
  @IsString()
  gioiTinh: string;
}
