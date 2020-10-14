import {MigrationInterface, QueryRunner, Table} from "typeorm";

// tslint:disable-next-line: class-name
export class createImages1602647206086 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable( new Table({
        name: 'images',
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

        // ANCHOR Path
        {
          name: 'path',
          type: 'varchar',
        },

        // ANCHOR Orphanage Id
        {
          name:'orphanage_id',
          type: 'integer',
        }
      ],

        // ANCHOR Foreign Keys
        foreignKeys: [
          {
          name: 'ImageOrphanage',
          columnNames: ['orphanage_id'],
          referencedTableName: 'orphanages',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('images')
    }
}
