import { EntityRepository, Repository } from 'typeorm';

import { Subscription } from './models/Subscription.entity';

@EntityRepository(Subscription)
export class SubscriptionRepository extends Repository<Subscription> {
}
