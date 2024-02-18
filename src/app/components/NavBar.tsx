import { Feather } from "lucide-react";
import Link from "next/link";
import { ActiveLink } from "@/app/components/ActiveLink";
import { HamburgerMenu } from "@/app/components/HamburgerMenu";
import { ThemeToggle } from "@/app/components/ThemeToggle";

export const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <HamburgerMenu />
          </div>
          <div className="relative hidden w-full items-center justify-between sm:flex">
            <Link href="/">
              <Feather />
            </Link>
            <div className="flex items-center justify-center gap-5 sm:items-stretch sm:justify-start">
              <ul className="flex gap-5">
                <li>
                  <ActiveLink href="/">Home</ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/products">Products</ActiveLink>
                </li>
              </ul>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
