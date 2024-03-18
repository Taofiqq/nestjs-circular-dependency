import { Injectable } from '@nestjs/common';
import { OrdersService } from '../orders/orders.service';
import { PaymentService } from '../payment/payment.service';

@Injectable()
export class RefundManagementService {
  constructor(
    private orderService: OrdersService,
    private paymentService: PaymentService,
  ) {}

  async processRefund(orderId: string) {
    // Check if the order is eligible for a refund
    const eligible = await this.orderService.checkRefundEligibility(orderId);
    if (!eligible) {
      throw new Error('Order not eligible for refund');
    }

    // Process the refund through the PaymentService
    const refundSuccessful = await this.paymentService.processRefund(orderId);
    if (refundSuccessful) {
      // Update the order status to "Refunded"
      await this.orderService.updateOrderStatus(orderId, 'Refunded');
    }
  }
}
