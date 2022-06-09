import { IsInt, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
export class KhachHangDto {
  @IsString()
  taiKhoan: string;
  @IsString()
  hoTen: string;
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

}
