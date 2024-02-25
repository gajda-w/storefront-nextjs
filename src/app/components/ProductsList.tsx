import Link from "next/link";
import { ProductCard } from "@/app/components/ProductCard";
import { type CategoryProductsBySlugQuery } from "@/gql/graphql";

export interface ProductsListProps {
  products: CategoryProductsBySlugQuery;
}

export const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-5" data-testid="products-list">
      {products.category?.products?.edges.map(({ node }) => (
        <Link href={`/product/${node.slug}`} key={node.id}>
          <ProductCard product={node} />
        </Link>
      ))}
    </ul>
  );
};

ProductsList.displayName = "ProductsList";
