import { IsString } from 'class-validator';

export class ShowDienDto {
  @IsString()
  ngayBatDau: string;
  @IsString()
  diaDiem: string;
  @IsString()
  ghiChu: string;
  @IsString()
  ngayKetThuc: string;
  @IsString()
  tinhTrang: string;
  @IsString()
  ngayDatShow: string;
}
