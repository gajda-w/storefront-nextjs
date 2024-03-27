import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { CartGetByIdDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/app/cart/components/CartItem";
import { Input } from "@/components/ui/input";
import { saveCheckout } from "@/app/cart/actions";

export default async function Cart() {
  const cartId = cookies().get("cartId")?.value;

  if (!cartId) {
    redirect("/");
  }

  const cart = await executeGraphql({ query: CartGetByIdDocument, variables: { id: cartId } });

  if (!cart) {
    redirect("/");
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse  gap-4 px-2 py-4 md:flex-row">
      <section className="flex flex-1 flex-col gap-4">
        <div className="flex flex-col gap-4">
          {cart.checkout?.lines.map((item) => {
            return <CartItem key={item.id} product={item} />;
          })}
        </div>
        <Link href="/checkout">
          <Button>Go to checkout</Button>
        </Link>
      </section>
      <section className="flex-2 min-w-[400px] rounded-md bg-slate-300 p-4 dark:bg-gray-900">
        <form action={saveCheckout}>
          <Input placeholder="email" required name="email" />
          <div>shipping address</div>
          <div>delivery method</div>
          <Button type="submit">Submit</Button>
        </form>
      </section>
    </main>
  );
}
