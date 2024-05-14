import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDefault21715691272098 implements MigrationInterface {
    name = 'AddDefault21715691272098'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL DEFAULT Tue May 14 2024 15:54:33 GMT+0300 (Eastern European Summer Time)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL`);
    }

}
