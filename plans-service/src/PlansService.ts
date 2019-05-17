import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Plan } from './models/Plan.entity';
import { PlanRepository } from './PlanRepository';
import { CreatePlanDto } from './PlansController';

@Injectable()
export class PlansService {

  constructor(@InjectRepository(Plan) private readonly planRepository: PlanRepository) {}

  async getPlans(): Promise<Plan[]> {
    return await this.planRepository.find();
  }

  async createPlan(body: CreatePlanDto): Promise<Plan> {
    const plan = new Plan();
    plan.name = body.name;
    plan.price = body.price;
    plan.type = body.type;
    plan.userId = body.userId;
    return await this.planRepository.save(plan);
  }

  async getPlanById(id: string): Promise<Plan> {
    return await this.planRepository.findOne(id);
  }
}
