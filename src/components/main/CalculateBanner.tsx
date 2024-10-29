"use client";
import Image from "next/image";
import Link from "next/link";

export default function CalculateBanner() {
  return (
    <div className="relative mb-24 aspect-[12/5] md:aspect-[16/3] lg:aspect-[21/3]">
      <Image
        src="/bg-calculate.png"
        alt="Calculate Banner"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="from-4% absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-base-black via-base-black/80 to-transparent to-80% px-5 md:px-20">
        <h1 className="text-md font-bold text-white md:text-2xl lg:text-4xl">
          Do you want to integrate green technology into your data center?
        </h1>
        <Link
          href="#calculate"
          className="mt-4 rounded-md px-8 font-bold text-black border border-input bg-background hover:bg-transparent hover:text-white"
        >
          Calculate
        </Link>
      </div>
    </div>
  );
}
