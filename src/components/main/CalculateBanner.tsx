"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { toast } from "sonner";

export default function CalculateBanner() {
  return (
    <div className=" relative mb-24 md:aspect-[16/3] lg:aspect-[21/3]">
      <Image
        src="/bg-calculate.png"
        alt="Calculate Banner"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 flex flex-col items-center px-20 justify-center bg-gradient-to-r from-base-black from-4% via-base-black/80 to-transparent to-80%">
        <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-white">
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
