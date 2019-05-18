import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Subscription } from './models/Subscription.entity';
import { CreateSubscriptionDto } from './SubscriptionsController';

@Injectable()
export class SubscriptionsService {

  constructor(
    @InjectRepository(Subscription) private readonly subscriptionRepository: Repository<Subscription>
  ) {}

  async getSubscriptions(): Promise<Subscription[]> {
    return await this.subscriptionRepository.find();
  }

  async createSubscription(data: CreateSubscriptionDto) {
    const subscription = new Subscription();
    subscription.coupon = data.coupon;
    subscription.cardNumber = data.cardNumber;
    subscription.expirationDate = data.expirationDate;
    subscription.holderName = data.holderName;
    subscription.cvv = data.cvv;
    return await this.subscriptionRepository.save(subscription);
  }

  async getSubscriptionById(id: number): Promise<Subscription> {
    return await this.subscriptionRepository.findOne(id);
  }
}
