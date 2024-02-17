import { ProductsList } from "@/app/components";
import { products } from "@/app/mocks";

export default function Products() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductsList products={products} />
    </main>
  );
}
