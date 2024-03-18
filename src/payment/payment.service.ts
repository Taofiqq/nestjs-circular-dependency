import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { OrdersService } from '../orders/orders.service';

@Injectable()
export class PaymentService {
  constructor(
    @Inject(forwardRef(() => OrdersService))
    private readonly ordersService: OrdersService,
  ) {}

  async processPayment(orderId: string) {
    // In a real scenario, you would interact with a payment gateway.
    console.log(`Processing payment for order ${orderId}`);
    const paymentSuccessful = true;

    if (paymentSuccessful) {
      // Once payment is successful, update the order status to "Paid"
      await this.ordersService.updateOrderStatus(orderId, 'Paid');
    }
  }
}
