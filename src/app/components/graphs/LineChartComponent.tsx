"use client";

import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface ChartProps {
  data: number | null;
  color?: string;
  title: string;
}

export default function LineChartComponent({ data, color = "#8884d8", title }: ChartProps) {
  const [history, setHistory] = useState<{ time: string; value: number }[]>([
    { time: "00:00", value: 20 },
  ]);

  useEffect(() => {
    if (data !== null) {
      const now = new Date();
      const timeString = now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

      setHistory((prev) => {
        const newHistory = [...prev, { time: timeString, value: data }];
        if (newHistory.length > 20) newHistory.shift();
        return newHistory;
      });
    }
  }, [data]);

  return (
    <div className="p-4 rounded-xl shadow-lg" style={{ backgroundColor: "var(--chart-bg)" }}>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={history}>
          <CartesianGrid stroke="var(--chart-grid)" strokeDasharray="3 3" />
          <XAxis dataKey="time" stroke="var(--text-color)" />
          <YAxis stroke="var(--text-color)" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke={color} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
