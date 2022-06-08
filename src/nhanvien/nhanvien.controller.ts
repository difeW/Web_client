import { AuthDto } from './dto/auth.dto';
import { NhanvienService } from './nhanvien.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('nhanvien')
export class NhanvienController {
    constructor(private nhanvien: NhanvienService) {}
    @Post('/dangky')
    DangKy(@Body() dto: AuthDto){
        return this.nhanvien.DangKy(dto)
    }
    @Post('/dangnhap')
    DangNhap(@Body() dto: AuthDto){
        return this.nhanvien.DangNhap(dto)

    }
 
}
