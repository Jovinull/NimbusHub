import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.API_BASE_URL,
    NEXT_PUBLIC_MQTT_URL: process.env.MQTT_URL,
    NEXT_PUBLIC_MQTT_TOPIC: process.env.MQTT_TOPIC,
  },
};

export default nextConfig;
