import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('subscription')
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  coupon: string;

  @Column({ type: 'varchar', length: 20 })
  cardNumber: string;

  @Column({ type: 'varchar', length: 50 })
  holderName: string;

  @Column({ type: 'varchar', length: 10 })
  expirationDate: string;

  @Column({ type: 'varchar', length: 3 })
  cvv: string;

  @Column({ type: 'integer' })
  planId: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
