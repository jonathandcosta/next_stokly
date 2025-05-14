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
  await db.product.create({
    data: {
      name,
      price,
      stock,
    },
  });
};
