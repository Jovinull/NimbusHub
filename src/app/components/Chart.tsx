"use client";

import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface ChartProps {
  data: number | null;
  color?: string;
  title: string;
}

export default function Chart({ data, color = "#8884d8", title }: ChartProps) {
  const [history, setHistory] = useState<{ time: string; value: number }[]>([]);

  useEffect(() => {
    if (data !== null) {
      const now = new Date();
      const timeString = now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

      setHistory((prev) => {
        const newHistory = [...prev, { time: timeString, value: data }];

        // Limita o número de pontos no gráfico para evitar sobrecarga visual
        if (newHistory.length > 20) {
          newHistory.shift();
        }

        return newHistory;
      });
    }
  }, [data]);

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {data === null && (
        <div className="bg-yellow-500 text-black p-2 mb-2 text-center rounded">
          ⚠️ Dados não disponíveis!
        </div>
      )}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={history}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke={color} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
