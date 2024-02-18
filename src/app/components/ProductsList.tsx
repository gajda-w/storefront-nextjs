import Link from "next/link";
import { ProductCard } from "@/app/components/ProductCard";
import { type Product } from "@/app/types";

export interface ProductsListProps {
  products: Product[];
}

export const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-5" data-testid="products-list">
      {products.map((product) => (
        <Link href={`/products/${product.id}`} key={product.id}>
          <ProductCard product={product} />
        </Link>
      ))}
    </ul>
  );
};

ProductsList.displayName = "ProductsList";
