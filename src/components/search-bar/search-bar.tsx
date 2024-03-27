"use client";

import React, { useState, useEffect } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { Search } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
import { DEFAULT_DEBOUNCE_TIME_IN_MS } from "../../../config";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { executeGraphql } from "@/lib/graphql";
import { ProductsSearchDocument, type ProductFragment } from "@/gql/graphql";
import { redirectToProduct } from "@/components/search-bar/actions";

export const SearchBar = () => {
  const [products, setProducts] = useState<ProductFragment[] | []>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedInputValue = useDebounce(searchQuery, DEFAULT_DEBOUNCE_TIME_IN_MS);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await executeGraphql({
        query: ProductsSearchDocument,
        variables: { first: 10, channel: "channel-pln", search: debouncedInputValue },
      });

      const products = response.products?.edges.map(({ node }) => node);
      if (products) setProducts(products);
    };

    void fetchProducts();
  }, [debouncedInputValue]);

  const handleProductClick = (slug: string) => {
    const boundRedirect = redirectToProduct.bind(null, slug);
    void boundRedirect();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Search />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>Find product</DialogHeader>
        <Input
          type="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {products.map((product) => {
          return (
            <DialogClose key={product.id}>
              <Button
                className="w-full"
                variant="ghost"
                onClick={() => handleProductClick(product.slug)}
              >
                {product.name}
              </Button>
            </DialogClose>
          );
        })}
      </DialogContent>
    </Dialog>
  );
};

SearchBar.displayName = "SearchBar";
