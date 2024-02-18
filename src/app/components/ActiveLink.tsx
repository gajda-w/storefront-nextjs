"use client";

import Link from "next/link";
import type { Route } from "next";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

export const ActiveLink = ({ href, children }: { href: Route; children: ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={clsx(isActive && "underline")}>
      {children}
    </Link>
  );
};

ActiveLink.displayName = "ActiveLink";
