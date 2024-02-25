import { ProductsList } from "@/components/products-list";
import { CollectionsProductsBySlugDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";

export default async function Products({ params: { slug } }: { params: { slug: string } }) {
  const collections = await executeGraphql(CollectionsProductsBySlugDocument, {
    channel: "default-channel",
    first: 10,
    slug: slug,
  });

  const products = collections.collection?.products?.edges.map(({ node }) => node);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductsList products={products} />
    </main>
  );
}
