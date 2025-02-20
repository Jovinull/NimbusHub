"use client";

import { useState, useEffect } from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts";

interface ChartProps {
  data: number | null;
  title: string;
}

export default function GaugeChartComponent({ data, title }: ChartProps) {
  const [value, setValue] = useState(50); // Valor padrão inicial

  useEffect(() => {
    if (data !== null) {
      setValue(data);
    }
  }, [data]);

  const chartData = [{ name: title, value }];

  return (
    <div className="p-4 rounded-xl shadow-lg transition-all" style={{ backgroundColor: "var(--chart-bg)" }}>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <RadialBarChart
          cx="50%" 
          cy="50%" 
          innerRadius="20%" 
          outerRadius="90%" 
          barSize={15} 
          data={chartData}
        >
          <RadialBar dataKey="value" fill="#00C49F" background />
          <Legend />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
