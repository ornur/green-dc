"use client";
import Form from "next/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { onSubmitHanlder } from "@/actions/calculate";
import { toast } from "sonner";

export default function CalculateForm() {
  return (
    <div className="container mx-auto">
      <h1 className="mb-12 w-full text-center text-lg font-bold md:text-4xl">
        Calculate the implementation of green technologies in your data centers.
      </h1>
      <div className="container mb-24 flex flex-col gap-5 px-20 md:flex-row">
        <Form
          action={onSubmitHanlder}
          className="md:w-1/2 space-y-2 rounded-lg p-5 shadow-xl"
        >
          <h3 className="pb-5 text-xl">Filter for calculation</h3>
          <label htmlFor="equipment">Equipment</label>
          <Input type="text" name="equipment" placeholder="Enter your name" />
          <label htmlFor="delivery">Delivery</label>
          <Input type="email" name="delivery" placeholder="Enter your email" />
          <Button
            type="submit"
            className="bg-green-500 hover:bg-green-700"
            onClick={() =>
              toast.error("Sorry, this feature is not implemented yet")
            }
          >
            Calculate
          </Button>
        </Form>
        <div className="flex md:w-1/2 flex-col justify-center rounded-lg p-5 shadow-xl">
          <h3 className="text-xl">The cost of green IT technologies</h3>
          <p>alknfwejodfwepkdowefiweij</p>
        </div>
      </div>
    </div>
  );
}
