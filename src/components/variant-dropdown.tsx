"use client";
import { SelectContent, SelectItem, SelectTrigger } from "@radix-ui/react-select";
import { Select } from "@/components/ui/select";
import { type VariantFragment } from "@/gql/graphql";
import { type Maybe } from "@/lib/types";

type VariantDropdownProps = {
  variants: Maybe<VariantFragment[]>;
};

export const VariantDropdown = ({ variants }: VariantDropdownProps) => {
  return (
    <Select>
      <SelectTrigger>Select Variant</SelectTrigger>
      <SelectContent>
        {variants?.map((variant) => (
          <SelectItem value={variant.id} key={variant.id}>
            {variant.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

VariantDropdown.displayName = "VariantDropdown";
