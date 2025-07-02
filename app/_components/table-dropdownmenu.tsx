"use client";
import DeleteProductDialogContent from "@/app/_components/delete-dialog-contet";
import { AlertDialog, AlertDialogTrigger, } from "@/app/_components/ui/alert-dialog";
import { Button } from "@/app/_components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/app/_components/ui/dropdown-menu";
import { MoreHorizontalIcon, ClipboardCopyIcon, EditIcon, TrashIcon } from "lucide-react";
import { useState } from "react";

const TableDropdownMenu = ({ productId }: { productId: string }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);

  return (
    <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
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
            onClick={() => navigator.clipboard.writeText(productId)}
          >
            <ClipboardCopyIcon size={16} />
            Copiar ID
          </DropdownMenuItem>

          <DropdownMenuItem className="gap-1.5">
            <EditIcon size={16} />
            Editar
          </DropdownMenuItem>

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
      <DeleteProductDialogContent productId={productId} />
    </AlertDialog >
  )
};
export default TableDropdownMenu;