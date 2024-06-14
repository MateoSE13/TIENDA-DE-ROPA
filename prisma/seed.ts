// seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Crear tiendas
  const store1 = await prisma.store.create({
    data: {
      name: 'New Balance Store A',
      location: '123 Main St, City A',
      products: {
        createMany: {
          data: [
            { name: 'Running Shoes', price: 99.99, quantity: 50, color: 'Blue' },
            { name: 'Training Shoes', price: 89.99, quantity: 30, color: 'Red' },
            { name: 'Casual Sneakers', price: 79.99, quantity: 40, color: 'Black' },
          ],
        },
      },
    },
    include: { products: true },
  });

  const store2 = await prisma.store.create({
    data: {
      name: 'New Balance Store B',
      location: '456 Oak St, City B',
      products: {
        createMany: {
          data: [
            { name: 'Running Shorts', price: 39.99, quantity: 100, color: 'Black' },
            { name: 'Training Pants', price: 49.99, quantity: 80, color: 'Gray' },
          ],
        },
      },
    },
    include: { products: true },
  });

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
