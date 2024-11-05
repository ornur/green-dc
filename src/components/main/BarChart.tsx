"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description =
  "A bar chart showing annual cost savings from wind power integration";

// Chart configuration for the "savings" bar
const chartConfig = {
  savings: {
    label: "Annual Cost Savings",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function BarChartComponent({
  chartData,
}: {
  chartData: { year: string; savings: string; ROI: string }[] | null;
}) {
  if (!chartData) return null;

  return (
    <Card className="max-w-[600px]">
      <CardHeader>
        <CardTitle>Annual Cost Savings Over Time</CardTitle>
        <CardDescription>
          Projected savings from wind power integration over 5 years
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="year" />
            <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} />
            <ChartTooltip />
            <Bar dataKey="savings" fill="var(--color-savings)" radius={8}>
              <LabelList
                position="top"
                formatter={(value: number) => `$${value.toLocaleString()}`}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
