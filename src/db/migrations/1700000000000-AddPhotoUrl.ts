// src/db/migrations/1700000000000-AddPhotoUrl.ts
import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPhotoUrl1700000000000 implements MigrationInterface {
  async up(q: QueryRunner) {
    await q.query(`ALTER TABLE "WATER_REPORT" ADD "photoUrl" character varying NOT NULL DEFAULT ''`);
  }
  async down(q: QueryRunner) {
    await q.query(`ALTER TABLE "WATER_REPORT" DROP COLUMN "photoUrl"`);
  }
}