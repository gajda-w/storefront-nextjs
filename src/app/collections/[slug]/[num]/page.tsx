import { ProductsList } from "@/components/products-list";
import { CollectionsProductsBySlugDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";

export default async function Products({
  params: { slug, num },
}: {
  params: { slug: string; num: number };
}) {
  console.log(num);

  const collections = await executeGraphql({
    query: CollectionsProductsBySlugDocument,
    variables: {
      channel: "channel-pln",
      first: 8,
      slug: slug,
    },
  });

  const products = collections.collection?.products?.edges.map(({ node }) => node);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductsList products={products} />
    </main>
  );
}
