"use client";

import TableDropdownMenu from "@/app/products/_components/table-dropdownmenu";
import { Badge } from "@/app/_components/ui/badge";

import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { CircleIcon } from "lucide-react";

const getStatusLabel = (status: string) => {
  if (status === "IN_STOCK") {
    return "Em estoque";
  }
  return "Fora de estoque";
};
export const productTableColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Produto",
  },
  {
    accessorKey: "price",
    header: "Valor unitário",
    cell: (row) => {
      const product = row.row.original;
      return Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(product.price));
    }
  },
  {
    accessorKey: "stock",
    header: "Estoque",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (row) => {
      const product = row.row.original;
      const label = getStatusLabel(product.status);
      return <Badge
        variant={label === "Em estoque" ? "default" : "destructive"} className="gap-1.5 items-center" >
        <CircleIcon size={14} className={`${label === "Em estoque" ? "fill-green-500" : "fill-red-500"}`} />
        {label}
      </Badge>
        ;
    },
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: (row) => {
      const product = row.row.original as Product;
      return (
        <TableDropdownMenu product={product} />

      )
    }
  }
];