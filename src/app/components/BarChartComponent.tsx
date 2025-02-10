"use client";

import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface ChartProps {
  data: number | null;
  color?: string;
  title: string;
}

export default function BarChartComponent({ data, color = "#FF7300", title }: ChartProps) {
  const [history, setHistory] = useState<{ time: string; value: number }[]>([
    { time: "00:00", value: 5 }, // Valor padrão inicial
  ]);

  useEffect(() => {
    if (data !== null) {
      const now = new Date();
      const timeString = now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

      setHistory((prev) => {
        const newHistory = [...prev, { time: timeString, value: data }];

        if (newHistory.length > 10) {
          newHistory.shift();
        }

        return newHistory;
      });
    }
  }, [data]);

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={history}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill={color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
