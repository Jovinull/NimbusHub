"use client";

import { useState, useEffect } from "react";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from "recharts";

interface RadarChartProps {
  temperature: number | null;
  humidity: number | null;
  pressure: number | null;
  windSpeed: number | null;
  rain: number | null;
}

export default function RadarChartComponent({ temperature, humidity, pressure, windSpeed, rain }: RadarChartProps) {
  const [data, setData] = useState([
    { metric: "Temp (°C)", value: 20 },
    { metric: "Umidade (%)", value: 50 },
    { metric: "Pressão (hPa)", value: 1013 },
    { metric: "Vento (km/h)", value: 10 },
    { metric: "Chuva (mm)", value: 0 },
  ]);

  useEffect(() => {
    setData([
      { metric: "Temp (°C)", value: temperature ?? 20 },
      { metric: "Umidade (%)", value: humidity ?? 50 },
      { metric: "Pressão (hPa)", value: pressure ?? 1013 },
      { metric: "Vento (km/h)", value: windSpeed ?? 10 },
      { metric: "Chuva (mm)", value: rain ?? 0 },
    ]);
  }, [temperature, humidity, pressure, windSpeed, rain]);

  return (
    <div className="p-4 rounded-xl shadow-lg transition-all" style={{ backgroundColor: "var(--chart-bg)" }}>
      <h2 className="text-lg font-bold mb-2">Comparativo Meteorológico</h2>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="metric" stroke="var(--text-color)" />
          <Tooltip />
          <Radar name="Medições" dataKey="value" stroke="#0088FE" fill="#0088FE" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
