import Link from "next/link";
import { type Route } from "next";
import { ProductCard } from "@/components/product-card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { CollectionsProductsBySlugDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";

export default async function Home() {
  const collection = await executeGraphql({
    query: CollectionsProductsBySlugDocument,
    variables: { slug: "featured-products", first: 4, channel: "channel-pln" },
  });

  const products = collection.collection?.products?.edges.map((edge) => edge.node);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between py-24"
      data-testid="related-products"
    >
      <h1 className="mb-8 text-4xl font-bold">Related products</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-7xl"
      >
        <CarouselContent>
          {products?.map((product) => (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
              <Link href={`product/${product.slug}` as Route} key={product.id}>
                <div className="flex justify-center p-1 ">
                  <ProductCard product={product} />
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </main>
  );
}
