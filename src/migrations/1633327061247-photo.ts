import {MigrationInterface, QueryRunner} from "typeorm";

export class photo1633327061247 implements MigrationInterface {
    name = 'photo1633327061247'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`photo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`subject\` varchar(255) NOT NULL, \`userId\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`photo\``);
    }

}
