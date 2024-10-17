/*
  Warnings:

  - You are about to drop the column `token` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Material" ALTER COLUMN "status" SET DEFAULT 'UNAVAILABLE';

-- AlterTable
ALTER TABLE "SPK" ADD COLUMN     "description" TEXT,
ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "token";
