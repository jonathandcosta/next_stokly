// pacote
import "server-only";

import { db } from "@/app/_lib/prisma";
import { Product } from "@prisma/client";
import { unstable_cache } from "next/cache";

export const getProducts = async (): Promise<Product[]> => {
  return db.product.findMany({});
};

export const cacheGetProducts = unstable_cache(getProducts, ["getproducts"], {
  revalidate: 5,
});
