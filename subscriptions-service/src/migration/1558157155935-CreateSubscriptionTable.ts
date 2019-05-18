import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSubscriptionTable1558157155935 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'subscription',
      columns: [{
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      }, {
        name: 'coupon',
        type: 'varchar',
        length: '20',
      }, {
        name: 'cardNumber',
        type: 'varchar',
        length: '20',
      }, {
        name: 'holderName',
        type: 'varchar',
        length: '50',
      }, {
        name: 'expirationDate',
        type: 'varchar',
        length: '10',
      }, {
        name: 'cvv',
        type: 'varchar',
        length: '3',
      }, {
        name: 'planId',
        type: 'integer',
      }, {
        name: 'createdAt',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP',
      }, {
        name: 'updatedAt',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP',
      }],
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
  }

}
