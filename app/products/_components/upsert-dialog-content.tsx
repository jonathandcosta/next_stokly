'use client';

import { upsertProduct } from "@/app/_actions/product/upsert-product/index.";
import { upsertProductSchema, UpsertProductSchema } from "@/app/_actions/product/upsert-product/schema";
import { Button } from "@/app/_components/ui/button";
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/app/_components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import { NumericFormat } from "react-number-format";

interface UpsertProductDialogContentProps {
  defaltValues?: UpsertProductSchema;
  onSuccess?: () => void;
}

const UpsertProductDialogContent = ({
  defaltValues,
  onSuccess
}: UpsertProductDialogContentProps) => {
  const form = useForm<UpsertProductSchema>({
    shouldUnregister: true,
    resolver: zodResolver(upsertProductSchema),
    defaultValues: defaltValues ?? {
      name: "",
      price: 0,
      stock: 1,
    }
  })

  const isEditing = !!defaltValues;

  const onSubmit = async (data: UpsertProductSchema) => {
    try {
      await upsertProduct({ ...data, id: defaltValues?.id });
      onSuccess?.()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <DialogContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <DialogHeader>
            <DialogTitle>{isEditing ? "Editar" : "Criar"} produto</DialogTitle>
            <DialogDescription>
              Insira as informações abaixo
            </DialogDescription>
          </DialogHeader>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o nome do produto" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preço</FormLabel>
                <FormControl>
                  <NumericFormat
                    thousandSeparator='.'
                    decimalSeparator=","
                    fixedDecimalScale
                    decimalScale={2}
                    prefix="R$"
                    allowNegative={false}
                    customInput={Input}
                    onValueChange={(values) =>
                      field.onChange(values.floatValue)
                    }
                    {...field}
                    onChange={() => { }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="stock"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estoque</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Digite o estoque do produto" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary" type="reset">Cancelar</Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="gap-1.5"
            >
              {form.formState.isSubmitting && (
                <Loader2Icon className="animate-spin" size={16} />
              )}
              Salvar
            </Button>
          </DialogFooter>

        </form>
      </Form>
    </DialogContent>
  );
}

export default UpsertProductDialogContent;