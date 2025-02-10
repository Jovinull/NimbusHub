"use client";

import { useEffect, useState } from "react";
import mqtt from "mqtt";
import LineChartComponent from "./LineChartComponent";
import GaugeChartComponent from "./GaugeChartComponent";
import BarChartComponent from "./BarChartComponent";
import ValueBox from "./ValueBox";

export default function WeatherDataProvider() {
    const [weatherData, setWeatherData] = useState({
        temperature: null,
        humidity: null,
        pressure: null,
        windSpeed: null,
        rain: null,
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

    // ✅ Extraindo corretamente os valores do estado
    const { temperature, humidity, pressure, windSpeed, rain } = weatherData;

    return (
        <main className="container mx-auto p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ValueBox data={temperature} title="Temperatura" unit="°C" />
            <LineChartComponent data={humidity} title="Umidade (%)" color="#0088FE" />
            <BarChartComponent data={rain} title="Chuva (mm)" color="#00C49F" />
            <GaugeChartComponent data={windSpeed} title="Velocidade do Vento (km/h)" />
        </main>
    );
}
