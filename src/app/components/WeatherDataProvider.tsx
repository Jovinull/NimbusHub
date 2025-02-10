"use client";

import { useEffect, useState } from "react";
import mqtt from "mqtt";
import ChartWrapper from "./ChartWrapper";

export default function WeatherDataProvider() {
  const [weatherData, setWeatherData] = useState({
    temperature: null,
    humidity: null,
    pressure: null,
  });

  useEffect(() => {
    const client = mqtt.connect(
      "wss://c0b8968ed7994cfda96d1e16cd9709243a0402e73e714189a5fdf292baf01769.s1.eu.hivemq.cloud:8884/mqtt"
    );

    client.on("connect", () => {
      console.log("✅ Conectado ao MQTT");
      client.subscribe("weather/#");
    });

    client.on("message", (topic, message) => {
      const value = message.toString();
      setWeatherData((prev) => ({
        ...prev,
        [topic.replace("weather/", "")]: isNaN(parseFloat(value)) ? value : parseFloat(value),
      }));
    });

    return () => {
      client.end();
    };
  }, []);

  return (
    <main className="container mx-auto p-6">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ChartWrapper data={weatherData.temperature} title="Temperatura (°C)" color="#ff7300" />
        <ChartWrapper data={weatherData.humidity} title="Umidade (%)" color="#0088FE" />
        <ChartWrapper data={weatherData.pressure} title="Pressão (hPa)" color="#00C49F" />
      </div>
    </main>
  );
}
