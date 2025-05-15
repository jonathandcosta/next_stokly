"use server";

import { db } from "@/app/_lib/prisma";

export const createProduct = async ({
  name,
  price,
  stock,
}: {
  name: string;
  price: number;
  stock: number;
}) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  await db.product.create({
    data: {
      name,
      price,
      stock,
    },
  });
};
