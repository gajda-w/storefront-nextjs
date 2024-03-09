"use server";

import { redirect } from "next/navigation";

export const redirectToProduct = async (slug: string) => {
  redirect(`/product/${slug}`);
};
