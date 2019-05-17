import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PlansController } from './PlansController';
import { PlansService } from './PlansService';
import { PlanRepository } from './PlanRepository';

@Module({
  imports: [

    TypeOrmModule.forFeature([PlanRepository]),
  ],
  controllers: [PlansController],
  providers: [PlansService],
})
export class PlansModule {
}
