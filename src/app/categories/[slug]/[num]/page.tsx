import { notFound } from "next/navigation";
import { CategoryProductsBySlugDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";
import { ProductsList } from "@/components/products-list";

export default async function Products({ params: { slug } }: { params: { slug: string } }) {
  const categories = await executeGraphql(CategoryProductsBySlugDocument, {
    channel: "default-channel",
    first: 10,
    slug: slug,
  });

  if (!categories) {
    return notFound();
  }

  const products = categories.category?.products?.edges.map(({ node }) => node);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductsList products={products} />
    </main>
  );
}
