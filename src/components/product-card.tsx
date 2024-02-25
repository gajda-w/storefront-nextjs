import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { type ProductFragment } from "@/gql/graphql";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export interface ProductCardProps {
  product: ProductFragment;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <li className="list-none">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {product?.media?.map((item) => (
                <CarouselItem key={item.id}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          src={item.url}
                          alt="Product"
                          width={100}
                          height={100}
                          className="h-80 w-72 rounded-t-xl object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
