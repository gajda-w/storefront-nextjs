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

export default async function Products({
  params: { pageNumber },
}: {
  params: { pageNumber: string };
}) {
  const paginationNumber = parseInt(pageNumber, 10) * 10;
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=10&offset=${paginationNumber}`,
  );
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
      <div className="mt-8 flex gap-10">
        {pageNumber !== "0" && <Link href={`/products/${Number(pageNumber) - 1}`}>prev</Link>}
        <Link href={`/products/${Number(pageNumber) + 1}`}>next</Link>
      </div>
    </main>
  );
}