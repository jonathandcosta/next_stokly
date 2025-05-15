"use server";

import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";

export const createProduct = async ({
  name,
  price,
  stock,
}: {
  name: string;
  price: number;
  stock: number;
}) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  await db.product.create({
    data: {
      name,
      price,
      stock,
    },
  });
  revalidatePath("/products");
};
