import { notFound } from "next/navigation";
import { CategoryProductsBySlugDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";
import { ProductsList } from "@/app/components";

export default async function Products({ params: { slug } }: { params: { slug: string } }) {
  const products = await executeGraphql(CategoryProductsBySlugDocument, {
    channel: "default-channel",
    first: 10,
    slug: slug,
  });

  if (!products) {
    return notFound();
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductsList products={products} />
    </main>
  );
}
