import Image from "next/image";
import { notFound } from "next/navigation";
import { ProductBySlugDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RichText } from "@/components/ui/rich-text";
import { type Maybe } from "@/lib/types";
import { Price } from "@/components/price";
import { VariantDropdown } from "@/components/variant-dropdown";
import { Button } from "@/components/ui/button";
import { addProductToCartAction } from "@/app/product/[id]/actions";

export const generateMetadata = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await executeGraphql({
    query: ProductBySlugDocument,
    variables: { slug: id, channel: "channel-pln" },
  });

  return {
    title: product.product?.name,
    description: product.product?.name,
    image: product.product?.thumbnail?.url,
  };
};

export default async function Product({
  params: { id },
  searchParams: { variantId },
}: {
  params: { id: string };
  searchParams: { variantId: string };
}) {
  const product = await executeGraphql({
    query: ProductBySlugDocument,
    variables: { slug: id, channel: "channel-pln" },
  });

  const variants = product.product?.variants;

  if (!product) {
    return notFound();
  }

  const handleAddToCart = addProductToCartAction.bind(null, { variantId });

  return (
    <div className="mx-auto my-8 flex max-w-7xl flex-col gap-10 px-4 sm:flex-row">
      <div className="w-full overflow-hidden sm:w-1/2">
        <Carousel className="m-full mx-4">
          <CarouselContent>
            {product.product?.media?.map((item) => (
              <CarouselItem key={item.id}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image
                        src={item.url}
                        alt="Product"
                        width={500}
                        height={500}
                        className="h-full w-full rounded-t-xl object-cover"
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
      </div>
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold">{product.product?.name}</h1>
        <div className="flex items-center">
          <p className="my-3 text-lg font-semibold">{`From: `}</p>
          <Price price={product.product?.pricing?.priceRange?.start?.gross} />
        </div>
        <VariantDropdown variants={variants} />
        <RichText className="mt-4" jsonStringData={product.product?.description as Maybe<string>} />
        <form action={handleAddToCart}>
          <Button type="submit">Add to cart</Button>
        </form>
      </div>
    </div>
  );
}
