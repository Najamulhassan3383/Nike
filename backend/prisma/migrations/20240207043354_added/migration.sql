/*
  Warnings:

  - The primary key for the `customer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `inventory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `inventory` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Color` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[value]` on the table `Size` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_customer_id_fkey`;

-- AlterTable
ALTER TABLE `customer` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `inventory` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`product_id`, `size_id`, `color_id`);

-- AlterTable
ALTER TABLE `order` MODIFY `customer_id` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Category_name_key` ON `Category`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Color_name_key` ON `Color`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Customer_email_key` ON `Customer`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `Product_name_key` ON `Product`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Size_value_key` ON `Size`(`value`);

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `Customer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
