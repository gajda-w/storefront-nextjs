import type { ProductResponseItem } from "@/app/products/[pageNumber]/page";
import { type Product } from "@/app/types";

export const generateStaticParams = async () => {
  const res = await fetch("https://naszsklep-api.vercel.app/api/products");
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

  return products.map((product) => ({ id: product.id }));
};

export const generateMetadata = async ({ params: { id } }: { params: { id: string } }) => {
  const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
  const product = (await res.json()) as ProductResponseItem;

  return {
    title: product.title,
    description: product.description,
    image: product.image,
  };
};

export default async function Product({ params: { id } }: { params: { id: string } }) {
  const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
  const product = (await res.json()) as ProductResponseItem;

  return (
    <div className="flex flex-col gap-10 p-2 sm:flex-row sm:px-6 lg:p-8">
      <div className="w-1/2 overflow-hidden">
        <img src={product.image} className="object-coover w-full" />
      </div>
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold">{product.title}</h1>
        <span className="mr-3 text-xs uppercase text-gray-400">{product.category}</span>
        <div className="flex items-center">
          <p className="my-3 text-lg font-semibold">{product.price} PLN</p>
        </div>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
