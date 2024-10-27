"use client";
import Image from "next/image";
import logo from "@/app/assets/logo.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function Header() {
  return (
    <header className="bg-base-black text-white">
      <div className="container mx-auto px-20 py-3 flex items-center justify-between">
        <nav className="flex items-center  gap-5">
          <Link href="/" className="flex items-center gap-3 mr-10">
            <Image src={logo} alt="GDC" width={40} height={40} />
            <h1 className="text-2xl font-bold">GDC</h1>
          </Link>

          <Link href="#">Green Map</Link>

          <Link href="#">Calculate</Link>

          <Link href="#">About us</Link>

          <Link href="#">Contacts</Link>
        </nav>

        <Button
          className="bg-white text-base-black hover:bg-base-black hover:text-white"
          onClick={() => {
            toast.error("Not implemented yet");
          }}
        >
          Sign in
        </Button>
      </div>
    </header>
  );
}
