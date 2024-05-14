import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1715690255555 implements MigrationInterface {
    name = 'CreateUser1715690255555'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`phoneNumber\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`removed\` tinyint NOT NULL, \`createdAt\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
