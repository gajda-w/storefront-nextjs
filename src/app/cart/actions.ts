"use server";

// export const changeItemQuantity = async (itemId: string, quantity: number) => {};

export const saveCheckout = (formData: FormData) => {
  console.log(formData.get("email"));
};
