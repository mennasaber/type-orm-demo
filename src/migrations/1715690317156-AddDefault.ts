import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDefault1715690317156 implements MigrationInterface {
    name = 'AddDefault1715690317156'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`removed\` \`removed\` tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`removed\` \`removed\` tinyint NOT NULL`);
    }

}
