"use client";
import { type ReactNode, useState } from "react";
import { type CategoriesQuery } from "@/gql/graphql";
import { ActiveLink } from "@/app/components/ActiveLink";

export const DropdownMenu = ({
  children,
  items,
}: {
  children: ReactNode;
  items: CategoriesQuery;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        <div className="relative">{children}</div>
        {isOpen && (
          <div className="absolute absolute left-1/2 top-6 flex -translate-x-1/2 transform cursor-pointer flex-col border-2 bg-white px-14 py-4 text-center text-black dark:bg-black dark:text-white">
            {items.categories?.edges.map(({ node }) => (
              <ActiveLink key={node.id} href={`/categories/${node.slug}/1`}>
                {node.name}
              </ActiveLink>
            ))}
            <div className="mt-4">
              <ActiveLink href="/categories">See all</ActiveLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

DropdownMenu.displayName = "DropdownMenu";
