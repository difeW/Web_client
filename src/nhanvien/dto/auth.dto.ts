import { IsString } from 'class-validator';
export class AuthDto {
  @IsString()
  taiKhoan: string;
  @IsString()
  matKhau: string;
}
