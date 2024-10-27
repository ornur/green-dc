"use client";
import Image from "next/image";
import logo from "@/app/assets/logo.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Header() {
  return (
    <header className="bg-base-black text-white">
      <div className="container mx-auto flex items-center justify-between px-20 py-3">
        <nav className="flex items-center gap-5">
          <Link href="/" className="mr-10 flex items-center gap-3">
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
