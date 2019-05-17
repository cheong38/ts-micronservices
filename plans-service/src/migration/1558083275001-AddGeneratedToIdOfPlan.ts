import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddGeneratedToIdOfPlan1558083275001 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.changeColumn(
      'plan',
      'id',
      new TableColumn({
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
  }

}
