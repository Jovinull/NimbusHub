"use client";

import dynamic from "next/dynamic";

const WeatherDataProvider = dynamic(() => import("./components/provides/WeatherDataProvider"), { ssr: false });

export default function Home() {
  return <WeatherDataProvider />;
}
