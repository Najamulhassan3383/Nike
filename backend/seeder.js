import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import data from "../../../data scapre/output_Puma.json" assert { type: "json" };

async function seedData() {
  const Data = data.results;
  try {
    // Create or find the "Sneakers" category
    for (let shoeData of Data) {
      const category = await prisma.category.upsert({
        where: { name: "Sneakers" },
        update: {},
        create: { name: "Sneakers" },
      });

      //name of color is unitll fist "/"
      const colorway = shoeData.colorway.split("/")[0];

      // Create color
      const color = await prisma.color.upsert({
        where: { name: colorway },
        update: {},
        create: { name: colorway },
      });
      const size = await prisma.size.upsert({
        where: { value: "M" },
        update: {},
        create: { value: "M" },
      });

      // Create product
      const product = await prisma.product.create({
        data: {
          name: shoeData.name,
          brand: shoeData.brand,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: shoeData.retailPrice,
          quantity_available: 10,
          purchase_price: shoeData.estimatedMarketValue,
          discount: 0,
          categories: {
            connect: { id: category.id },
          },
        },
      });

      // Create inventory
      const inven = await prisma.inventory.create({
        data: {
          size: {
            connect: { value: "M" },
          },
          color: {
            connect: { id: color.id },
          },
          quantity: 10,
          product: {
            connect: { id: product.id },
          },
        },
      });

      // Create product image
      await prisma.productImage.create({
        data: {
          original_url: shoeData.image.original,
          small_url: shoeData.image.small,
          thumbnail_url: shoeData.image.thumbnail,
          product: {
            connect: { id: product.id },
          },
        },
      });
    }

    console.log("Seed data inserted successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedData();
