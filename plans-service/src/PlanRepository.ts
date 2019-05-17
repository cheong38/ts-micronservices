import { EntityRepository, Repository } from 'typeorm';
import { Plan } from './models/Plan.entity';

@EntityRepository(Plan)
export class PlanRepository extends Repository<Plan> {
}
