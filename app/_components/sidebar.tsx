import { LayoutGridIcon, PackageIcon, ShoppingBasketIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Sidebar = () => {
  return (

    <div className="w-64 bg-white">
      <div className="px-8 py-6">
        <h1 className="font-bold text-2xl">STOCKLY</h1>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <Button variant={"ghost"} className="justify-start gap-2" asChild>
          <Link href='/'>
            <LayoutGridIcon size={20} />
            Dashboard
          </Link>
        </Button>
        <Button variant={'ghost'} className="justify-start gap-2" asChild>
          <Link href="/products">
            <PackageIcon size={20} />
            Produtos
          </Link>
        </Button>
        <Button variant={'ghost'} className="justify-start gap-2" asChild>
          <Link href='/sales'>
            <ShoppingBasketIcon size={20} />
            Vendas
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;