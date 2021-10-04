import {MigrationInterface, QueryRunner} from "typeorm";

export class UserPhotoRelation1633330694234 implements MigrationInterface {
    name = 'UserPhotoRelation1633330694234'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`age\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`photo\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`photo\` ADD \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`photo\` ADD \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`photo\` ADD \`user_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`photo\` ADD CONSTRAINT \`FK_c8c60110b38af9f778106552c39\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`photo\` DROP FOREIGN KEY \`FK_c8c60110b38af9f778106552c39\``);
        await queryRunner.query(`ALTER TABLE \`photo\` DROP COLUMN \`user_id\``);
        await queryRunner.query(`ALTER TABLE \`photo\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`photo\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`photo\` ADD \`userId\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
