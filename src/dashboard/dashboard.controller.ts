import { DashboardService } from './dashboard.service';
import { Controller, Get } from '@nestjs/common';

@Controller('dashboard')
export class DashboardController {
  constructor(private casishow: DashboardService) {}
  @Get('doanhthu')
  getDoanhThu() {
    return this.casishow.getProfit();
  }
  @Get('khachhang')
  getKhachhang() {
    return this.casishow.getCustomer();
  }

  @Get('baihat')
  getBaiHat() {
    return this.casishow.getProduct();
  }

  @Get('casi')
  getCaSi() {
    return this.casishow.getSinger();
  }
}
