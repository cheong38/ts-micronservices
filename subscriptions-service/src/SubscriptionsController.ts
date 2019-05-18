import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { SubscriptionsService } from './SubscriptionsService';

export class CreateSubscriptionDto {
  coupon: string;
  cardNumber: string;
  holderName: string;
  expirationDate: string;
  cvv: string;
  planId: number;
}

@Controller()
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Get()
  getSubscriptions() {
    return this.subscriptionsService.getSubscriptions();
  }

  @Post()
  createSubscription(@Body() body: CreateSubscriptionDto) {
    return this.subscriptionsService.createSubscription(body);
  }

  @Get('/:id')
  getSubscription(@Param('id') id: number) {
    return this.subscriptionsService.getSubscriptionById(id);
  }
}
