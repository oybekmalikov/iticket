import { Module } from '@nestjs/common';
import { AuthCustomerService } from './auth_customer.service';
import { AuthCustomerController } from './auth_customer.controller';
import { CustomerService } from '../customer/customer.service'

@Module({
  exports:[CustomerService],
  controllers: [AuthCustomerController],
  providers: [AuthCustomerService],
})
export class AuthCustomerModule {}
