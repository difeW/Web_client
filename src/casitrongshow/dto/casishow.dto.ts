import { IsInt, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
export class caSiShowDto {
  @IsString()
  maShow: string;
  @IsString()
  maCS: string;
}
