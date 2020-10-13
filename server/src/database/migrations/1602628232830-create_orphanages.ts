import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602628232830 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable( new Table({
      name: 'orphanages',
      columns: [
        // ANCHOR Id
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },

        // ANCHOR Name
        {
          name: 'name',
          type: 'varchar'
        },

        // ANCHOR Latitude
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },

        // ANCHOR Longitude
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },

        // ANCHOR About
        {
          name: 'about',
          type: 'text',          
        },

        // ANCHOR Instruction
        {
          name: 'instruction',
          type: 'text',         
        },

        // ANCHOR Open on weekends
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false,         
        },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orphanages')
  }

}
