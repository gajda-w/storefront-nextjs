"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { CartAddProductDocument, CartCreateDocument, CartGetByIdDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/graphql";

export async function addProductToCartAction({ variantId }: { variantId: string }) {
  const cartId = cookies().get("cartId")?.value;

  if (!cartId) {
    const cart = await executeGraphql({
      query: CartCreateDocument,
      variables: { lines: [{ variantId: variantId, quantity: 1 }], channel: "channel-pln" },
    });

    if (cart.checkoutCreate?.checkout?.id) {
      const id = cart.checkoutCreate?.checkout?.id;
      cookies().set("cartId", id);
    }
  } else {
    const cart = await executeGraphql({ query: CartGetByIdDocument, variables: { id: cartId } });

    if (cart) {
      await executeGraphql({
        query: CartAddProductDocument,
        variables: { id: cartId, lines: [{ variantId: variantId, quantity: 1 }] },
      });

      revalidatePath("/cart");
    }
  }
}
