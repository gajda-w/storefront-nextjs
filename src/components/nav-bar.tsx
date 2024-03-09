import { Feather, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { NavigationLink } from "@/components/navigation-link";
import { executeGraphql } from "@/lib/graphql";
import { CategoriesDocument, CollectionsDocument } from "@/gql/graphql";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/toggle-mode";
import { Button } from "@/components/ui/button";
// import { SearchBar } from "@/components/search-bar/search-bar";
import { SearchBar } from "@/components/search-bar/search-bar";

export const Navbar = async () => {
  const categories = await executeGraphql(CategoriesDocument, { first: 6 });
  const collections = await executeGraphql(CollectionsDocument, {
    first: 5,
    channel: "default-channel",
  });

  if (!categories) {
    return notFound();
  }

  return (
    <nav className="border-b-2 border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="relative hidden w-full items-center justify-between sm:flex">
            <Link href="/">
              <Feather />
            </Link>
            <div className="flex items-center justify-center gap-5 sm:items-stretch sm:justify-start">
              <ul className="flex gap-5">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem asChild>
                      <NavigationLink href="/">Home</NavigationLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <Link href="/categories">
                        <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                      </Link>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          {categories.categories?.edges.map(({ node }) => (
                            <ListItem
                              key={node.id}
                              href={`/categories/${node.slug}/1`}
                              title={node.name}
                            />
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <Link href="/collections">
                        <NavigationMenuTrigger>Collections</NavigationMenuTrigger>
                      </Link>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          {collections.collections?.edges.map(({ node }) => (
                            <ListItem
                              key={node.id}
                              href={`/collections/${node.slug}/1`}
                              title={node.name}
                            />
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </ul>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <ShoppingCart />
              </Button>
              <Button variant="outline" size="icon">
                <User />
              </Button>
              <SearchBar />
              <div className="ml-4">
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
