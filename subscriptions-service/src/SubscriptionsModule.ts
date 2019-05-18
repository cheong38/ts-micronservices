import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SubscriptionsController } from './SubscriptionsController';
import { SubscriptionsService } from './SubscriptionsService';
import { config } from './config';
import { SubscriptionRepository } from './SubscriptionRepository';

const env = process.env.NODE_ENV || 'development';
const envConfig = config[env];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: envConfig.dialect,
      host: envConfig.host,
      username: envConfig.username,
      password: envConfig.password,
      port: envConfig.port,
      database: envConfig.database,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    TypeOrmModule.forFeature([SubscriptionRepository]),
  ],
  controllers: [SubscriptionsController],
  providers: [SubscriptionsService],
})
export class SubscriptionsModule {}
