/*
  Warnings:

  - You are about to drop the column `image_url` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `image_url`;

-- CreateTable
CREATE TABLE `ProductImage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `original_url` VARCHAR(191) NOT NULL,
    `small_url` VARCHAR(191) NOT NULL,
    `thumbnail_url` VARCHAR(191) NOT NULL,
    `product_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProductImage` ADD CONSTRAINT `ProductImage_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
