import { Button } from "../_components/ui/button";
import { ComboboxOption } from "../_components/ui/combobox";
import { Sheet, SheetTrigger } from "../_components/ui/sheet";
import { getProducts } from "../_data-acess/product/get-produts";
import UpsertSheetContent from "./_components/upsert-sheet-content";

const Sales = async () => {
  const products = await getProducts()

  // Tratar os dados aqui no servidor
  const productsOptions: ComboboxOption[] = products.map((product) => ({
    value: product.id,
    label: product.name,
  }));


  return (
    <div className="w-full space-y-8 p-8 bg-white ml-8">
      <div className="flex w-full items-center justify-between">
        <div className="space-y1">
          <span className="font-semibold text-slate-950 text-4xl">Gestão de Vendas</span>
          <h2 className="text-xl font-semibold text-green-500 mb-2">Vendas</h2>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button>Criar Venda</Button>
          </SheetTrigger>
          <UpsertSheetContent productsOptions={productsOptions} />
        </Sheet>
      </div>
      {/* <DataTable columns={productTableColumns} data={JSON.parse(JSON.stringify(products))} /> */}
    </div>
  );
}

export default Sales;