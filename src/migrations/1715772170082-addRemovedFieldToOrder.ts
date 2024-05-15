import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRemovedFieldToOrder1715772170082 implements MigrationInterface {
    name = 'AddRemovedFieldToOrder1715772170082'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`removed\` tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`removed\``);
    }

}
