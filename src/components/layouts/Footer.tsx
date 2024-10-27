"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/logo.svg?url";
import InstagramIcon from "@/app/assets/instagram.svg?url";
import TelegramIcon from "@/app/assets/telegram.svg?url";
import FacebookIcon from "@/app/assets/facebook.svg?url";
import { toast } from "sonner";

export default function Footer() {
  return (
    <footer className="container flex w-full flex-row gap-28 bg-base-black px-20 py-10 text-white">
      <div className="flex basis-2/5 flex-col gap-5">
        <Link href="/" className="flex items-center gap-x-3">
          <Image src={logo} alt="GDC" width={80} height={80} />
          <h1 className="text-2xl font-bold">GDC</h1>
        </Link>
        <h1 className="font-bold uppercase tracking-wide">
          About our projects
        </h1>
        <p className="text-white/50 font-light">
          Lorem Ipsum - это текст-&quot;рыба&quot;, часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной &quot;рыбой&quot; для текстов на
          латинице с начала XVI века. В то время некий
        </p>
      </div>
      <div className="flex basis-1/5 flex-col gap-5">
        <h1 className="font-bold uppercase tracking-wide my-6">Menu</h1>
        <Link className="hover:underline hover:text-yellow-600 cursor-pointer" href="#">Green Map</Link>
        <Link className="hover:underline hover:text-yellow-600 cursor-pointer" href="#">Calculate</Link>
        <Link className="hover:underline hover:text-yellow-600 cursor-pointer" href="#">About us</Link>
        <Link className="hover:underline hover:text-yellow-600 cursor-pointer" href="#">Contacts</Link>
      </div>
      <div className="basis-2/5">
        <h1 className="basis-2/5 font-bold uppercase tracking-wide my-6 ">
          Our social links
        </h1>
        <p className="text-white/50 font-light pt-5">
          Lorem Ipsum - это текст-&quot;рыба&quot;, часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является
        </p>
        <div className="my-5 flex gap-5">
          <Image
            className="cursor-pointer"
            src={InstagramIcon}
            alt="Instagram"
            width={30}
            height={30}
            onClick={() => {toast.error("Not implemented yet");}}
          />
          <Image
            className="cursor-pointer"
            src={TelegramIcon}
            alt="Telegram"
            width={30}
            height={30}
            onClick={() => {toast.error("Not implemented yet");}}
          />
          <Image
            className="cursor-pointer"
            src={FacebookIcon}
            alt="Facebook"
            width={30}
            height={30}
            onClick={() => {toast.error("Not implemented yet");}}
          />
        </div>
      </div>
    </footer>
  );
}
