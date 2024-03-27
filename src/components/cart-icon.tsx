import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";
import { executeGraphql } from "@/lib/graphql";
import { CartGetByIdDocument } from "@/gql/graphql";

export const CartIcon = async () => {
  const cartId = cookies().get("cartId")?.value;

  if (!cartId) {
    return null;
  }

  const cart = await executeGraphql({
    query: CartGetByIdDocument,
    variables: { id: cartId },
    next: { tags: ["cart"] },
  });
  return (
    <Link href="/cart">
      <Button variant="outline" size="icon">
        <ShoppingCart />
      </Button>
      {cart.checkout?.lines.length}
    </Link>
  );
};

CartIcon.displayName = "CartIcon";
