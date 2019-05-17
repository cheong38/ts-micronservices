import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePlanTable1558078088625 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'plan',
      columns: [{
        name: 'id',
        type: 'int',
        isPrimary: true,
      }, {
        name: 'name',
        type: 'varchar',
        length: '255',
      }, {
        name: 'price',
        type: 'float',
      }, {
        name: 'type',
        type: 'varchar',
        length: '20',
      }, {
        name: 'userId',
        type: 'integer',
      }],
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
  }

}
