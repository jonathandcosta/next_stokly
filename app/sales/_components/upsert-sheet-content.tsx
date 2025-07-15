import { SheetContent, SheetDescription, SheetTitle, SheetHeader } from "@/app/_components/ui/sheet";

const upsertSheetContent = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Nova Venda</SheetTitle>
        <SheetDescription>
          Preencha os campos abaixo para criar ou editar uma venda.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
}

export default upsertSheetContent;