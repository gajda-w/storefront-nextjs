import { type ProductResponseItem } from "@/app/products/page";
import { type Product } from "@/app/types";

export default async function Product({ params: { id } }: { params: { id: string } }) {
  console.log(id);
  const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
  const product = (await res.json()) as ProductResponseItem;

  return <div>{product.title}</div>;
}
