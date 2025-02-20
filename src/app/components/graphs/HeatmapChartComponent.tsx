"use client";

import { useState, useEffect } from "react";
import { ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, ScatterChart, Scatter } from "recharts";

interface ChartProps {
  data: number | null;
  title: string;
  color?: string;
}

export default function HeatmapChartComponent({ data, title, color = "#FF4500" }: ChartProps) {
  const [history, setHistory] = useState<{ time: string; value: number }[]>([
    { time: "00:00", value: 20 },
  ]);

  useEffect(() => {
    if (data !== null) {
      const now = new Date();
      const timeString = now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

      setHistory((prev) => {
        const newHistory = [...prev, { time: timeString, value: data }];
        if (newHistory.length > 50) newHistory.shift();
        return newHistory;
      });
    }
  }, [data]);

  return (
    <div className="p-4 rounded-xl shadow-lg transition-all" style={{ backgroundColor: "var(--chart-bg)" }}>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <CartesianGrid stroke="var(--chart-grid)" />
          <XAxis dataKey="time" stroke="var(--text-color)" />
          <YAxis dataKey="value" stroke="var(--text-color)" />
          <Tooltip />
          <Scatter name={title} data={history} fill={color} />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
