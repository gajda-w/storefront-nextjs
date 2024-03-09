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

export const generateMetadata = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await executeGraphql(ProductBySlugDocument, {
    slug: id,
    channel: "default-channel",
  });

  return {
    title: product.product?.name,
    description: product.product?.name,
    image: product.product?.thumbnail?.url,
  };
};

export default async function Product({ params: { id } }: { params: { id: string } }) {
  const product = await executeGraphql(ProductBySlugDocument, {
    slug: id,
    channel: "default-channel",
  });

  const variants = product.product?.variants;
  // const defaultVariant = product.product?.defaultVariant;

  if (!product) {
    return notFound();
  }

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
        <RichText jsonStringData={product.product?.description as Maybe<string>} />
      </div>
    </div>
  );
}
