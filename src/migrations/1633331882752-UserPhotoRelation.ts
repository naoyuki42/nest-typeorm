import {MigrationInterface, QueryRunner} from "typeorm";

export class UserPhotoRelation1633331882752 implements MigrationInterface {
    name = 'UserPhotoRelation1633331882752'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`photo\` ADD \`genru\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`photo\` DROP COLUMN \`genru\``);
    }

}
