import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { type ProductFragment } from "@/gql/graphql";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export interface ProductCardProps {
  product: ProductFragment;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <li>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src={product.thumbnail?.url || ""}
            alt="Product"
            width={100}
            height={100}
            className="h-80 w-72 rounded-t-xl object-cover"
          />
          {/* TODO component for formatted prices */}
          {product.defaultVariant?.pricing?.price?.gross.amount}{" "}
          {product.defaultVariant?.pricing?.price?.gross.currency}
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="outline" size="icon">
            <ShoppingCart />
          </Button>
        </CardFooter>
      </Card>
    </li>
  );
};

ProductCard.displayName = "ProductCard";
