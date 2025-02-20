"use client";

import { useEffect, useState } from "react";
import { weatherService } from "@/Service/WeatherService";
import LineChartComponent from "./LineChartComponent";
import GaugeChartComponent from "./GaugeChartComponent";
import BarChartComponent from "./BarChartComponent";
import ValueBox from "./ValueBox";
import HeatmapChartComponent from "./HeatmapChartComponent";
import RadarChartComponent from "./RadarChartComponent";

export default function WeatherDataProvider() {
    const [weatherData, setWeatherData] = useState(weatherService.getWeatherData());

    useEffect(() => {
        // Subscreve à Service para receber atualizações
        weatherService.subscribe(setWeatherData);
    }, []);

    const { temperature, humidity, pressure, windSpeed, rain } = weatherData;

    return (
        <main className="container mx-auto p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ValueBox data={temperature} title="Temperatura" unit="°C" />
            <LineChartComponent data={humidity} title="Umidade (%)" color="#0088FE" />
            <BarChartComponent data={rain} title="Chuva (mm)" color="#00C49F" />
            <GaugeChartComponent data={windSpeed} title="Velocidade do Vento (km/h)" />
            <HeatmapChartComponent data={pressure} title="Pressão Atmosférica (hPa)" />
            <RadarChartComponent 
                temperature={temperature} 
                humidity={humidity} 
                pressure={pressure} 
                windSpeed={windSpeed} 
                rain={rain} 
            />
        </main>
    );
}
