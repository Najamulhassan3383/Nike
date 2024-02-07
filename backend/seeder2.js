import { PrismaClient } from "@prisma/client";

// img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
//     title: "Nike Air Monarch IV",
//
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "200",
//     company: "Nike",
//     color: "white",
//     category: "sneakers",
//     _id: 123,

const prisma = new PrismaClient();
const data = [
  {
    img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
    title: "Nike Air Monarch IV",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "white",
    category: "Sneakers",
    _id: 123,
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Nike Air Vapormax Plus",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "red",
    category: "Sneakers",
    _id: 124,
  },

  {
    img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
    title: "Nike Waffle One Sneaker",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "green",
    category: "Sneakers",
    _id: 125,
  },
  {
    img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
    title: "Nike Running Shoe",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Adidas",
    color: "black",
    category: "Sneakers",
    _id: 126,
  },
  {
    img: "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
    title: "Flat Slip On Pumps",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Vans",
    color: "green",
    category: "Flats",
    _id: 127,
  },
  {
    img: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
    title: "Knit Ballet Flat",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Adidas",
    color: "black",
    category: "Flats",
    _id: 128,
  },

  {
    img: "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
    title: "Loafer Flats",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Vans",
    color: "white",
    category: "Flats",
    _id: 129,
  },

  {
    img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
    title: "Nike Zoom Freak",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "green",
    category: "Sneakers",
    _id: 131,
  },

  {
    img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
    title: "Nike Men's Sneaker",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Adidas",
    color: "blue",
    category: "Sneakers",
    _id: 132,
  },

  {
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "PUMA BLACK-OCE",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    color: "green",
    category: "Sneakers",
    _id: 133,
  },
  {
    img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
    title: "Pacer Future Sneaker",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    color: "red",
    category: "Sneakers",
    _id: 134,
  },
  {
    img: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
    title: "Unisex-Adult Super",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    color: "black",
    category: "Sneakers",
    _id: 135,
  },
  {
    img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
    title: "Roma Basic Sneaker",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    color: "white",
    category: "Sneakers",
    _id: 136,
  },
  {
    img: "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
    title: "Pacer Future Doubleknit",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    color: "black",
    category: "Sneakers",
    _id: 137,
  },

  {
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "Fusion Evo Golf Shoe",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    company: "Puma",
    color: "green",
    category: "Sneakers",
    _id: 138,
  },
  {
    img: "https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg",
    title: "Rainbow Chex Skate",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    company: "Vans",
    color: "red",
    category: "Flats",
    _id: 139,
  },
  {
    img: "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
    title: "Low-Top Trainers",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    company: "Vans",
    color: "white",
    category: "Sandals",
    _id: 141,
  },
  {
    img: "https://m.media-amazon.com/images/I/71pf7VFs9CL._AC_UX575_.jpg",
    title: "Vans Unisex Low-Top",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    company: "Vans",
    color: "blue",
    category: "Sandals",
    _id: 142,
  },
  {
    img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
    title: "Classic Bandana Sneakers",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Nike",
    color: "black",
    category: "Sandals",
    _id: 143,
  },
  {
    img: "https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg",
    title: "Chunky High Heel",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Vans",
    color: "black",
    category: "Heels",
    _id: 144,
  },
  {
    img: "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
    title: "Slip On Stiletto High Heel",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    company: "puma",
    color: "black",
    category: "Heels",
    _id: 145,
  },
  {
    img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
    title: "DREAM PAIRS Court Shoes",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Nike",
    color: "red",
    category: "Heels",
    _id: 146,
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Nike Air Vapormax Plus",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "red",
    category: "Sneakers",
    _id: 147,
  },

  {
    img: "https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg",
    title: "Low Mid Block Heels",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "black",
    category: "Heels",
    _id: 148,
  },
  {
    img: "https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg",
    title: "Chunky High Heel",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Adidas",
    color: "black",
    category: "Heels",
    _id: 149,
  },
  {
    img: "https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg",
    title: "Amore Fashion Stilettos",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Adidas",
    color: "white",
    category: "Heels",
    _id: 150,
  },
  {
    img: "https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg",
    title: "Bridal Sandals Glitter",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Adidas",
    color: "black",
    category: "Heels",
    _id: 151,
  },
  {
    img: "https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg",
    title: "Wedding Prom Bridal",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Adidas",
    color: "black",
    category: "Flats",
    _id: 152,
  },
];

async function seedData() {
  try {
    // Create or find the "Sneakers" category
    for (let shoeData of data) {
      const category = await prisma.category.upsert({
        where: { name: shoeData.category },
        update: {},
        create: { name: shoeData.category },
      });

      // Create color
      const color = await prisma.color.upsert({
        where: { name: shoeData.color },
        update: {},
        create: { name: shoeData.color },
      });
      const size = await prisma.size.upsert({
        where: { value: "M" },
        update: {},
        create: { value: "M" },
      });

      // Create product
      const product = await prisma.product.create({
        data: {
          name: shoeData.title,
          brand: shoeData.company,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: shoeData.newPrice,
          quantity_available: 10,
          purchase_price: shoeData.prevPrice,
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
          original_url: shoeData.img,
          small_url: shoeData.img,
          thumbnail_url: shoeData.img,
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
