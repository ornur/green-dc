"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { toast } from "sonner";

export default function CalculateBanner() {
  return (
    <div className="container relative mb-24 aspect-[21/3]">
      <Image
        src="/bg-calculate.png"
        alt="Calculate Banner"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 flex flex-col items-start px-20 justify-center bg-gradient-to-r from-base-black from-4% via-base-black/80 to-transparent to-80%">
        <h1 className="text-2xl font-bold text-white md:text-4xl">
          Do you want to integrate green technology into your data center?
        </h1>
        <Button
          className="mt-4 bg-transparent px-8 font-bold text-white"
          variant="outline"
          onClick={() => {
            toast.error("Not implemented yet");
          }}
        >
          Calculate
        </Button>
      </div>
    </div>
  );
}
