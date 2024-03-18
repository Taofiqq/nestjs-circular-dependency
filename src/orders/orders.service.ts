import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { PaymentService } from '../payment/payment.service';

interface IOrder {
  id: number;
  customerName: string;
  item: string;
  orderDate: Date;
  totalAmount: number;
}
@Injectable()
export class OrdersService {
  constructor(
    @Inject(forwardRef(() => PaymentService))
    private readonly paymentService: PaymentService,
  ) {}

  async getAllOrders(): Promise<IOrder[]> {
    const mockOrders: IOrder[] = [
      {
        id: 1,
        customerName: 'Taofiq',
        item: 'Airpod',
        orderDate: new Date(),
        totalAmount: 900,
      },
    ];

    return mockOrders;
  }

  async createOrder(createOrder): Promise<any> {
    // mock data to simulate order creation

    const newOrder: any = {
      id: Math.floor(Math.random() * 100) + 1,
      ...createOrder,
      orderDate: new Date(createOrder.orderDate),
    };

    await this.paymentService.processPayment(newOrder.id);
    return newOrder;
  }
  async updateOrderStatus(orderId: string, status: string) {
    // update the order status here in the database
    console.log(`Order ${orderId} status updated to ${status}`);
  }
}
