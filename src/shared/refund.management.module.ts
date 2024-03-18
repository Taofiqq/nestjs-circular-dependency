import { Module } from '@nestjs/common';
import { RefundManagementService } from './redund.management.service';

@Module({
  providers: [RefundManagementService],
  exports: [RefundManagementService],
})
export class OrdersModule {}
