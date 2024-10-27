"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Hero() {
  return (
    <div className="aspect-[14/5] relative container">
      <Image
        src="/hero 1.png"
        alt="Hero Image"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-base-black from-10% via-base-black/80 to-transparent to-100%">
        <div className="max-w-[850px] text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Sustain the Planet: Green IT for a Brighter Future
          </h1>
          <p className="text-white text-lg md:text-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <Button
            className="mt-4 bg-transparent text-white font-bold px-8"
            variant="outline"
            onClick={() => {
              toast.error("Not implemented yet");
            }}
          >
            More
          </Button>
        </div>
      </div>
    </div>
  );
}
