// import type { ProductResponseItem } from "@/app/products/[pageNumber]/page";
// import { type Product } from "@/app/types";
import { ProductBySlugDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";

// export const generateStaticParams = async () => {
//   const res = await fetch("https://naszsklep-api.vercel.app/api/products");
//   const productsResponse = (await res.json()) as ProductResponseItem[];

//   const products = productsResponse.map(
//     (product): Product => ({
//       id: product.id,
//       name: product.title,
//       category: product.category,
//       price: product.price,
//       image: product.image,
//     }),
//   );

//   return products.map((product) => ({ id: product.id }));
// };

// export const generateMetadata = async ({ params: { id } }: { params: { id: string } }) => {
//   const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
//   const product = (await res.json()) as ProductResponseItem;

//   return {
//     title: product.title,
//     description: product.description,
//     image: product.image,
//   };
// };

export default async function Product({ params: { id } }: { params: { id: string } }) {
  console.log("id", id);
  const product = await executeGraphql(ProductBySlugDocument, {
    slug: id,
    channel: "default-channel",
  });

  return (
    <div className="flex flex-col gap-10 p-2 sm:flex-row sm:px-6 lg:p-8">
      <div className="w-1/2 overflow-hidden">
        <img src={product.product?.thumbnail?.url} className="object-coover w-full" />
      </div>
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold">{product.product?.name}</h1>
        <div className="flex items-center">
          <p className="my-3 text-lg font-semibold">
            {product.product?.defaultVariant?.pricing?.price?.gross.amount}
          </p>
        </div>
        {/* <p>{product.product?.description}</p> */}
        <p>{JSON.stringify(product.product?.description)}</p>
      </div>
    </div>
  );
}
