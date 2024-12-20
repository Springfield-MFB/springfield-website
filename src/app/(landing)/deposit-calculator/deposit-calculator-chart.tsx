"use client";

import Image from "next/image";

import { TrendingUp } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
const chartData = [{ browser: "safari", visitors: 200, fill: "#F0B929" }];

export const CalculatorChart = () => {
  return (
    <div className="relative lg:w-[40%] overflow-hidden px-10 py-20 rounded-[10px] shadow-sm mt-8 max-w-lg bg-[#5F5F5F] text-white">
      <Image
        src="/svg/spring-svg.svg"
        alt="Loan Calculator Process"
        width={1000}
        height={1000}
        className="absolute size-[150px] bottom-0 right-0 z-10 opacity-70"
      />
      <Image
        src="/svg/spring-svg.svg"
        alt="Loan Calculator Process"
        width={1000}
        height={1000}
        className="absolute size-[250px] -top-8 -left-16 z-10 opacity-70"
      />

      <div className="flex justify-center space-x-6">
        <div className="flex items-center text-sm space-x-2">
          <div className="size-6 bg-brand-primary rounded-full" />
          <span>Total Investment</span>
        </div>

        <div className="flex items-center text-sm space-x-2">
          <div className="size-6 bg-[#8F8F8F] rounded-full" />
          <span>Total Return</span>
        </div>
      </div>

      <Chart />
    </div>
  );
};

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "#F0B929",
  },
} satisfies ChartConfig;

function Chart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px] "
    >
      <RadialBarChart
        data={chartData}
        startAngle={0}
        endAngle={250}
        innerRadius={105}
        outerRadius={64}
      >
        <PolarGrid
          gridType="circle"
          stroke="gray"
          radialLines={false}
          className="first:fill-muted  last:fill-background"
          polarRadius={[95, 74]}
        />
        <RadialBar dataKey="visitors" background cornerRadius={10} />
        <PolarRadiusAxis
          tick={false}
          tickLine={false}
          axisLine={false}
        ></PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
}
