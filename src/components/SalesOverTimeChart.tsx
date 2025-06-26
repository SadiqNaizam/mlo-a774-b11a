import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

// Sample data to make the component self-contained for display
const chartData = [
  { date: "2024-07-15", sales: 2390 },
  { date: "2024-07-16", sales: 3490 },
  { date: "2024-07-17", sales: 2000 },
  { date: "2024-07-18", sales: 2780 },
  { date: "2024-07-19", sales: 1890 },
  { date: "2024-07-20", sales: 2390 },
  { date: "2024-07-21", sales: 3490 },
];

const chartConfig = {
  sales: {
    label: "Sales",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

interface SalesDataPoint {
  date: string;
  sales: number;
}

interface SalesOverTimeChartProps {
  data?: SalesDataPoint[];
  timeRange?: string;
}

const SalesOverTimeChart: React.FC<SalesOverTimeChartProps> = ({ 
  data = chartData, 
  timeRange = "Last 7 Days" 
}) => {
  console.log('SalesOverTimeChart loaded');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Over Time</CardTitle>
        <CardDescription>{timeRange}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
              top: 5,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => new Date(value).toLocaleDateString("en-US", { month: 'short', day: 'numeric' })}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip
              cursor={true}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  formatter={(value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value as number)}
                />
              }
            />
            <Line
              dataKey="sales"
              type="monotone"
              stroke="var(--color-sales)"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default SalesOverTimeChart;