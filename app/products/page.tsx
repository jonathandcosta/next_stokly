import { PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";
import { cacheGetProducts } from "../_data-acess/product/get-produts";

export const dynamic = 'force-dynamic'

const ProductsPage = async () => {
  const products = await cacheGetProducts()

  return (
    <div className="w-full space-y-8 p-8 bg-white ml-8">
      <div className="flex w-full items-center justify-between">
        <div className="space-y1">
          <h2 className="text-xl font-semibold text-green-500 mb-2">Produtos</h2>
          <span className="font-semibold text-slate-950 text-4xl">Gestão de Produtos</span>
        </div>
        <Button className="gap-2">
          <PlusIcon size={20} />
          Novo Produto
        </Button>
      </div>
      <DataTable columns={productTableColumns}
        data={JSON.parse(JSON.stringify(products))} />
    </div>
  );
}

export default ProductsPage;