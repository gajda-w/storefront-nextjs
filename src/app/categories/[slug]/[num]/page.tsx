import { notFound } from "next/navigation";
import { CategoryProductsBySlugDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";
import { ProductsList } from "@/components/products-list";

import { PaginationNav } from "@/components/pagination-nav";

// TODO: Implement the pagination logic, how to deal with the cursor?

export default async function Products({
  params: { slug, num },
}: {
  params: { slug: string; num: number };
}) {
  const categories = await executeGraphql({
    query: CategoryProductsBySlugDocument,
    variables: {
      channel: "channel-pln",
      first: 4,
      // after: "WyJnaWZ0LWNhcmQtNTAiXQ==",
      slug: slug,
    },
  });

  if (!categories) {
    return notFound();
  }

  console.log("end cursor", categories.category?.products?.pageInfo.endCursor);
  console.log("end cursor", categories.category?.products?.pageInfo.hasNextPage);
  const products = categories.category?.products?.edges.map(({ node }) => node);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductsList products={products} />

      {categories.category?.products?.pageInfo.endCursor}
      <PaginationNav
        pageNumber={num}
        hasNextPage={categories.category?.products?.pageInfo.hasNextPage}
        hasPreviousPage={categories.category?.products?.pageInfo.hasPreviousPage}
      />
    </main>
  );
}
