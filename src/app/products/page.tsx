import Link from "next/link";
import { ProductsList } from "@/app/components";
import { type Product } from "@/app/types";

export type ProductResponseItem = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
  longDescription: string;
};

export default async function Products() {
  const res = await fetch("https://naszsklep-api.vercel.app/api/products?take=10&offset=0");
  const productsResponse = (await res.json()) as ProductResponseItem[];

  const products = productsResponse.map(
    (product): Product => ({
      id: product.id,
      name: product.title,
      category: product.category,
      price: product.price,
      image: product.image,
    }),
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductsList products={products} />
      <Link href="/products/0" className="mt-8">
        Show all
      </Link>
    </main>
  );
}
