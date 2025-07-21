"use client";

import { Button } from "@/app/_components/ui/button";
import { Combobox, ComboboxOption } from "@/app/_components/ui/combobox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { SheetContent, SheetDescription, SheetTitle, SheetHeader } from "@/app/_components/ui/sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  productId: z.string().uuid({
    message: "Selecione um produto válido",
  }),
  quatity: z.coerce.number().int().positive(),
})

type FormSchema = z.infer<typeof formSchema>;

interface UpsertSheetContentProps {
  productsOptions: ComboboxOption[];
}

const UpsertSheetContent = ({ productsOptions }: UpsertSheetContentProps) => {

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productId: "",
      quatity: 1,
    },
  })

  const onSubmit = (data: FormSchema) => {
    // Handle form submission logic here
    console.log(data);
  };


  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Nova Venda</SheetTitle>
        <SheetDescription>
          Preencha os campos abaixo para criar ou editar uma venda.
        </SheetDescription>
      </SheetHeader>

      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="productId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Produto</FormLabel>
                <FormControl>
                  <Combobox
                    placeholder="Selecione um produto"
                    options={productsOptions}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="quatity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantidade</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Add submit button or other actions here */}
          <Button type="submit" className="w-full gap-2" variant='secondary'>
            <PlusIcon size={20} />
            Adicionar produto à venda
          </Button>
        </form>

      </Form>
    </SheetContent>
  );
};

export default UpsertSheetContent;