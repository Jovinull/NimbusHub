"use client";

import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useTheme } from "../provides/ThemeProvider";

interface WeatherData {
  recorded_at: string;
  temperature: number;
  humidity: number;
  pressure: number;
  wind_speed: number;
  rainfall: number;
}

interface WeatherChartProps {
  data: WeatherData[];
}

export default function WeatherChart({ data }: WeatherChartProps) {
  const { theme } = useTheme(); // Obtém o tema atual

  // Estado para armazenar os dados formatados
  const [chartData, setChartData] = useState<WeatherData[]>([
    { recorded_at: "Sem dados", temperature: 0, humidity: 0, pressure: 0, wind_speed: 0, rainfall: 0 }
  ]);

  // Atualiza os dados sempre que `data` mudar
  useEffect(() => {
    setChartData(data.length > 0 ? data : [
      { recorded_at: "Sem dados", temperature: 0, humidity: 0, pressure: 0, wind_speed: 0, rainfall: 0 }
    ]);
  }, [data]);

  // Define estilos baseados no tema
  const backgroundColor = theme === "dark" ? "#1E293B" : "#F3F4F6";
  const textColor = theme === "dark" ? "#FFFFFF" : "#000000";

  return (
    <div className="p-4 rounded-xl shadow-lg transition-all" style={{ backgroundColor }}>
      <h2 className="text-lg font-bold text-center mb-4" style={{ color: textColor }}>
        Gráficos de Sensores
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="recorded_at" tick={{ fill: textColor }} tickFormatter={(tick) => tick.split("T")[0]} />
          <YAxis tick={{ fill: textColor }} />
          <Tooltip contentStyle={{ backgroundColor, color: textColor }} />
          <Legend wrapperStyle={{ color: textColor }} />
          <Line type="monotone" dataKey="temperature" stroke="#ff7300" name="Temperatura (°C)" />
          <Line type="monotone" dataKey="humidity" stroke="#0088FE" name="Umidade (%)" />
          <Line type="monotone" dataKey="pressure" stroke="#00C49F" name="Pressão (hPa)" />
          <Line type="monotone" dataKey="wind_speed" stroke="#FFBB28" name="Velocidade do vento (km/h)" />
          <Line type="monotone" dataKey="rainfall" stroke="#8884d8" name="Precipitação (mm)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
