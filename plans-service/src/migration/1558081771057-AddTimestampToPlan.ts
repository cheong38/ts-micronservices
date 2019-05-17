import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddTimestampToPlan1558081771057 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.addColumns(
      'plan',
      [
        new TableColumn({
          name: 'createdAt',
          type: 'timestamp',
          default: 'CURRENT_TIMESTAMP',
        }),
        new TableColumn({
          name: 'updatedAt',
          type: 'timestamp',
          default: 'CURRENT_TIMESTAMP',
        }),
      ],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
  }

}
