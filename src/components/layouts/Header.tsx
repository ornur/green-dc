"use client";
import Image from "next/image";
import logo from "@/app/assets/logo.svg?url";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export default function Header() {
  return (
    <header className="bg-base-black text-white">
      <div className="container mx-auto px-5 flex items-center justify-between py-3 md:px-20">
        <nav className="flex items-center gap-5">
          <Link href="/" className="mr-10 flex items-center gap-3">
            <Image src={logo} alt="GDC" width={40} height={40} />
            <h1 className="text-2xl font-bold">GDC</h1>
          </Link>

          <Link className="hidden md:block" href="#">
            Green Map
          </Link>

          <Link className="hidden md:block" href="#">
            Calculate
          </Link>

          <Link className="hidden md:block" href="#">
            About us
          </Link>

          <Link className="hidden md:block" href="#">
            Contacts
          </Link>
        </nav>

        <Button
          className="hidden bg-white text-base-black hover:bg-base-black hover:text-white md:block"
          onClick={() => {
            toast.error("Not implemented yet");
          }}
        >
          Sign in
        </Button>
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="block md:hidden" />
          </SheetTrigger>
          <SheetContent className="sm:w-[200px] flex flex-col">
            <SheetTitle>Menu</SheetTitle>
            <SheetHeader>
              <Button
                className="bg-green-500 text-white hover:bg-base-black hover:text-white"
                onClick={() => {
                  toast.error("Not implemented yet");
                }}
              >
                Sign in
              </Button>
            </SheetHeader>
            <Link className="" href="#">
              Green Map
            </Link>

            <Link className="" href="#">
              Calculate
            </Link>

            <Link className="" href="#">
              About us
            </Link>

            <Link className="" href="#">
              Contacts
            </Link>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
