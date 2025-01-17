import { db } from "../_lib/prisma";

const ProductsPage = async () => {
  const products = await db.product.findMany({})

  return (
    <div>
      {products.map(product => <p key={product.id}>{product.name}</p>)}
      <p>Produtos</p>
    </div>
  );
}

export default ProductsPage;