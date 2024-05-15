import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserIdField1715773543643 implements MigrationInterface {
    name = 'AddUserIdField1715773543643'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`FK_caabe91507b3379c7ba73637b84\` ON \`order\``);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`userId\` \`userId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_caabe91507b3379c7ba73637b84\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_caabe91507b3379c7ba73637b84\``);
        await queryRunner.query(`ALTER TABLE \`order\` CHANGE \`userId\` \`userId\` int NULL`);
        await queryRunner.query(`CREATE INDEX \`FK_caabe91507b3379c7ba73637b84\` ON \`order\` (\`userId\`)`);
    }

}
