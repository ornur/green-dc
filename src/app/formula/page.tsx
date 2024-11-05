import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export default function Formula() {
  const formulas = [
    {
      title: "Annual Energy Offset",
      formula:
        "Annual Energy Offset = Wind Power Capacity × Operational Efficiency × Hours in a Year",
      description:
        "Calculates the annual energy produced by the wind installation based on capacity and efficiency.",
      example: "500 kW × 0.30 × 8760 hours = 1,314,000 kWh",
    },
    {
      title: "Annual Cost Savings",
      formula:
        "Annual Cost Savings = Annual Energy Offset × Electricity Cost per kWh",
      description:
        "Shows the annual savings by replacing grid electricity with wind energy.",
      example: "1,314,000 kWh × 0.10 = $131,400",
    },
    {
      title: "Total Carbon Reduction",
      formula: "CO₂ Reduction = Annual Energy Offset × Carbon Emission Factor",
      description:
        "Calculates the CO₂ emissions saved by using wind energy instead of conventional energy.",
      example: "1,314,000 kWh × 0.00045 = 591.3 tons CO₂",
    },
    {
      title: "Return on Investment (ROI)",
      formula:
        "ROI = ((Annual Cost Savings - Annual Maintenance Cost) / Initial Investment Cost) × 100",
      description:
        "Calculates the annual percentage return on the wind power investment.",
      example: "((131,400 - 10,000) / 500,000) × 100 = 24.28%",
    },
    {
      title: "Payback Period",
      formula:
        "Payback Period = Initial Investment Cost / (Annual Cost Savings - Annual Maintenance Cost)",
      description:
        "Shows how long it will take to recover the initial investment in wind power.",
      example: "500,000 / (131,400 - 10,000) = 4.21 years",
    },
  ];
  return (
    <>
      <Header />
      <div className="container mx-auto space-y-6 p-6 px-5 md:px-20">
        <h1 className="text-center text-3xl font-semibold text-gray-800">
          Wind Integration Formula
        </h1>

        <div className="grid grid-cols-2 gap-5">
          {formulas.map((formula, index) => (
            <Card key={index} className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-medium text-gray-900">
                  {formula.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold">Formula:</p>
                  <code className="block rounded-md bg-gray-100 p-2 font-mono text-sm">
                    {formula.formula}
                  </code>
                </div>
                <div>
                  <p className="font-semibold">Description:</p>
                  <p>{formula.description}</p>
                </div>
                <div>
                  <p className="font-semibold">Example:</p>
                  <code className="block rounded-md bg-gray-100 p-2 font-mono text-sm">
                    {formula.example}
                  </code>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
