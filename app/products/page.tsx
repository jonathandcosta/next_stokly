import { PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";

const ProductsPage = async () => {
  const products = await db.product.findMany({})

  return (
    <div className="w-full space-y-8 p-8">
      {/* {products.map(product => <p key={product.id}>{product.name}</p>)} */}
      <div className="flex w-full items-center justify-between">
        <div className="space-y1">
          <span className="text-xs font-semibold text-slate-500">
            Gestão de Produtos
          </span>
          <h2 className="text-xl font-semibold">Produtos</h2>
        </div>
        <Button className="gap-2">
          <PlusIcon size={20} />
          Novo Produto
        </Button>
      </div>
    </div>
  );
}

export default ProductsPage;