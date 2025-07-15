"use server";

import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";
import { UpsertProductSchema, upsertProductSchema } from "./schema";

export const upsertProduct = async (data: UpsertProductSchema) => {
  upsertProductSchema.parse(data);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  await db.product.upsert({
    where: { id: data?.id ?? "" },
    create: data,
    update: data,
  });
  revalidatePath("/products");
};
