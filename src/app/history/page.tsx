"use client";

import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fetchWeatherHistory } from "@/Service/WeatherService";
import WeatherChart from "../components/graphs/WeatherChart";
import { useTheme } from "../components/provides/ThemeProvider";

interface WeatherData {
  recorded_at: string;
  temperature: number;
  humidity: number;
  pressure: number;
  wind_speed: number;
  rainfall: number;
}

export default function HistoryPage() {
  const { theme } = useTheme();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const start = startDate.toISOString().split("T")[0];
      const end = endDate.toISOString().split("T")[0];
      const data = await fetchWeatherHistory(start, end);

      setWeatherData(data.length > 0 ? data : [{
        recorded_at: "Sem dados",
        temperature: 0,
        humidity: 0,
        pressure: 0,
        wind_speed: 0,
        rainfall: 0
      }]);
    }
    fetchData();
  }, [startDate, endDate]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Histórico Meteorológico</h1>

      <div className="flex justify-center gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium">Data Inicial:</label>
          <DatePicker 
            selected={startDate} 
            onChange={(date) => date && setStartDate(date)} 
            className={`p-2 rounded transition-all ${
              theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
            }`}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Data Final:</label>
          <DatePicker 
            selected={endDate} 
            onChange={(date) => date && setEndDate(date)} 
            className={`p-2 rounded transition-all ${
              theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
            }`}
          />
        </div>
      </div>

      <div className="p-4 rounded-xl shadow-md transition-all" style={{ backgroundColor: theme === "dark" ? "#1E293B" : "#F3F4F6" }}>
        {weatherData.length === 0 || !weatherData[0]?.recorded_at ? (
          <p className="text-center text-gray-400">Nenhum dado encontrado. Exibindo valores padrão.</p>
        ) : (
          <WeatherChart data={weatherData} />
        )}
      </div>
    </div>
  );
}
