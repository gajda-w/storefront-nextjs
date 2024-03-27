import { Trash, Plus, Minus } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { type CartLineFragment } from "@/gql/graphql";

export const CartItem = ({ product }: { product: CartLineFragment }) => {
  console.log(product);
  return (
    <Card className="w-full">
      <div className="grid gap-2.5 p-4">
        <div className="flex items-center gap-4">
          <Image
            src={product.variant.product.thumbnail?.url || ""}
            width={200}
            height={200}
            alt={product.variant.product.name}
          />
          <div className="grid gap-1.5">
            <h3 className="text-base font-bold leading-none">{product?.variant.product.name}</h3>
            <div className="font-bold">$99</div>
            <div className="text-muted text-sm">Color: Blue</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Button className="rounded-full" size="sm" variant="outline">
              <Minus />
              <span className="sr-only">Decrease</span>
            </Button>
            <span className="font-bold">1</span>
            <Button className="rounded-full" size="sm" variant="outline">
              <Plus />
              <span className="sr-only">Increase</span>
            </Button>
          </div>
          <Button className="rounded-full" size="sm" variant="outline">
            <Trash />
            <span className="sr-only">Remove</span>
          </Button>
        </div>
      </div>
    </Card>
  );
};

CartItem.displayName = "CartItem";
