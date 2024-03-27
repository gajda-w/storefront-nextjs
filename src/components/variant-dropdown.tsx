/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import { useEffect, useState } from "react";
import { CheckIcon } from "lucide-react";
import { useWindowSize } from "usehooks-ts";
import { usePathname, useRouter } from "next/navigation";
import { type Route } from "next";
import { screenSizes } from "../../config";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { type VariantFragment } from "@/gql/graphql";
import { type Maybe } from "@/lib/types";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

type VariantDropdownProps = {
  variants: Maybe<VariantFragment[]>;
};

const getIdFromHash = () => (typeof window === "undefined" ? "" : location.hash.replace("#", ""));

export const VariantDropdown = ({ variants }: VariantDropdownProps) => {
  const [selectedVariant, setSelectedVariant] = useState("");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const { width } = useWindowSize();
  const isSmDown = width && width < screenSizes.sm;

  useEffect(() => {
    if (selectedVariant) {
      router.push(`${pathname}?variantId=${selectedVariant}` as Route, { scroll: false });
    } else if (getIdFromHash() && !selectedVariant) {
      // @ts-expect-error idk why this is throwing an error
      router.push(pathname, { scroll: false });
    }
  }, [selectedVariant]);

  useEffect(() => {
    /**
     * Cant set this in initial useState due hydration error,
     */
    const variantId = getIdFromHash();

    if (variantId) {
      setSelectedVariant(variantId);
    }
  }, []);

  return (
    <>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent side="bottom">
          <ul>
            {variants?.map(({ id, ...variant }) => (
              <li
                key={id}
                className="flex cursor-pointer"
                onClick={() => {
                  setSelectedVariant(id);
                  setIsSheetOpen(false);
                }}
              >
                <Button variant="ghost" className="w-full justify-start p-1.5">
                  <CheckIcon
                    className={cn("invisible mr-2 h-auto w-[20px]", {
                      visible: selectedVariant === id,
                    })}
                  />
                  {variant.name}
                </Button>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>

      <Label>Select variant</Label>
      <Select
        disabled={!variants?.length}
        open={isSmDown ? false : undefined}
        onValueChange={(variantId) => setSelectedVariant(variantId)}
        onOpenChange={() => isSmDown && setIsSheetOpen(true)}
        value={variants?.length && selectedVariant ? selectedVariant : undefined}
      >
        <SelectTrigger className="mt-1">
          <SelectValue placeholder="Select variant" />
        </SelectTrigger>
        <SelectContent>
          {variants?.map(({ id, name }) => (
            <SelectItem key={id} value={id}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

VariantDropdown.displayName = "VariantDropdown";
