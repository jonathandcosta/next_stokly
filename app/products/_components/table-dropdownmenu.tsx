"use client";
import DeleteProductDialogContent from "@/app/products/_components/delete-dialog-contet";
import { AlertDialog, AlertDialogTrigger, } from "@/app/_components/ui/alert-dialog";
import { Button } from "@/app/_components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/app/_components/ui/dropdown-menu";
import { MoreHorizontalIcon, ClipboardCopyIcon, EditIcon, TrashIcon } from "lucide-react";
import { useState } from "react";
import UpsertProductDialogContent from "./upsert-dialog-content";
import { Dialog, DialogTrigger } from "../../_components/ui/dialog";

export interface Product {
  id: string;
  name: string;
  stock: number;
  price: number;
}

const TableDropdownMenu = ({ product }: { product: Product }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogOpenEdit, setDialogOpenEdit] = useState(false);
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);

  return (
    <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <Dialog open={dialogOpenEdit} onOpenChange={setDialogOpenEdit}>
        <DropdownMenu open={dropdownMenuOpen} onOpenChange={setDropdownMenuOpen} >

          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <MoreHorizontalIcon size={16} />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem
              className="gap-1.5"
              onClick={() => navigator.clipboard.writeText(product.id)}
            >
              <ClipboardCopyIcon size={16} />
              Copiar ID
            </DropdownMenuItem>

            <DialogTrigger asChild>
              <DropdownMenuItem
                className="gap-1.5"
                onClick={() => {
                  // setDialogOpenEdit(true);
                  setDropdownMenuOpen(false);
                }}
              >
                <EditIcon size={16} />
                Editar
              </DropdownMenuItem>
            </DialogTrigger>

            <AlertDialogTrigger asChild>
              <DropdownMenuItem
                className="gap-1.5"
                onClick={() => {
                  setDialogOpen(true);
                  setDropdownMenuOpen(false);
                }}
              >
                <TrashIcon size={16} />
                Deletar
              </DropdownMenuItem>
            </AlertDialogTrigger>
          </DropdownMenuContent >
        </DropdownMenu >
        <UpsertProductDialogContent
          defaltValues={{
            id: product.id,
            name: product.name,
            stock: product.stock,
            price: Number(product.price),
          }}
          onSuccess={() => setDialogOpenEdit(false)} />
        <DeleteProductDialogContent productId={product.id} />
      </Dialog>
    </AlertDialog >
  )
};
export default TableDropdownMenu;