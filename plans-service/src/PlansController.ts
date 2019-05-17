import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { PlansService } from './PlansService';

export class CreatePlanDto {
  name: string;
  price: number;
  type: string;
  userId: number;
}

@Controller()
export class PlansController {
  constructor(private readonly plansService: PlansService) {}

  @Get()
  getPlans() {
    return this.plansService.getPlans();
  }

  @Post()
  createPlan(@Body() body: CreatePlanDto) {
    return this.plansService.createPlan(body);
  }

  @Get('/:id')
  getPlan(@Param('id') id: string) {
    return this.plansService.getPlanById(id);
  }
}
