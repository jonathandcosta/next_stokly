import { Button } from "../_components/ui/button";
import { Sheet, SheetTrigger } from "../_components/ui/sheet";
import UpsertSheetContent from "./_components/upsert-sheet-content";

const Sales = () => {
  return (
    <div className="w-full space-y-8 p-8 bg-white ml-8">
      <div className="flex w-full items-center justify-between">
        <div className="space-y1">
          <span className="font-semibold text-slate-950 text-4xl">Gestão de Vendas</span>
          <h2 className="text-xl font-semibold text-green-500 mb-2">Vendas</h2>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Criar Venda
            </Button>
          </SheetTrigger>
          <UpsertSheetContent />
        </Sheet>
      </div>
      {/* <DataTable columns={productTableColumns} data={JSON.parse(JSON.stringify(products))} /> */}
    </div>
  );
}

export default Sales;