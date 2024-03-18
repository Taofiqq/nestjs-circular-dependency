import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getAllOrders(): any {
    return this.ordersService.getAllOrders();
  }

  @Post()
  async createOrder(@Body() createOrder) {
    const newOrder = await this.ordersService.createOrder(createOrder);

    return newOrder;
  }
}
