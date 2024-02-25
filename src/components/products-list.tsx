"use client";

import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { type ProductFragment } from "@/gql/graphql";

export interface ProductsListProps {
  products?: ProductFragment[];
}

export const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-5" data-testid="products-list">
      {products?.map((product) => (
        <Link href={`/product/${product.slug}`} key={product.id}>
          <ProductCard product={product} />
        </Link>
      ))}
    </ul>
  );
};

ProductsList.displayName = "ProductsList";
