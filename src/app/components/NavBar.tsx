import { Feather, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { ActiveLink } from "@/app/components/ActiveLink";
import { ThemeToggle } from "@/app/components/ThemeToggle";

export const Navbar = () => {
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
                <li>
                  <ActiveLink href="/">Home</ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/products">Products</ActiveLink>
                </li>
              </ul>
            </div>
            <div className="flex gap-2">
              <ShoppingBag />
              <User />
              <div className="ml-4">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
