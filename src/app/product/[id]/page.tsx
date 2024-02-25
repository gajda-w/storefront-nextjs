// import type { ProductResponseItem } from "@/app/products/[pageNumber]/page";
// import { type Product } from "@/app/types";
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

// export const generateStaticParams = async () => {
//   const res = await fetch("https://naszsklep-api.vercel.app/api/products");
//   const productsResponse = (await res.json()) as ProductResponseItem[];

//   const products = productsResponse.map(
//     (product): Product => ({
//       id: product.id,
//       name: product.title,
//       category: product.category,
//       price: product.price,
//       image: product.image,
//     }),
//   );

//   return products.map((product) => ({ id: product.id }));
// };

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

  if (!product) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-10 p-2 sm:flex-row sm:px-6 lg:p-8">
      <div className="w-1/2 overflow-hidden">
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
          <p className="my-3 text-lg font-semibold">
            {product.product?.defaultVariant?.pricing?.price?.gross.amount}
          </p>
        </div>
      </div>
    </div>
  );
}
