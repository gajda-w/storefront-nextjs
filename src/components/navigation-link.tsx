"use client";

import Link from "next/link";
import type { Route } from "next";
import { type ReactNode } from "react";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const NavigationLink = ({ href, children }: { href: Route; children: ReactNode }) => {
  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>{children}</NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

NavigationLink.displayName = "NavigationLink";
