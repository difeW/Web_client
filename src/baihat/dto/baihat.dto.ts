import { IsString } from 'class-validator';
export class BaiHatDto {
  @IsString()
  tenBH: string;
  @IsString()
  hinhAnh: string;
  @IsString()
  mp4: string;
  @IsString()
  maCS: string;
}
