import mqtt from "mqtt";
import axios from "axios";

type WeatherData = {
  temperature: number | null;
  humidity: number | null;
  pressure: number | null;
  windSpeed: number | null;
  windDirection: string | null;
  rain: number | null;
};

const mqttUrl = process.env.NEXT_PUBLIC_MQTT_URL as string;
const topic = process.env.NEXT_PUBLIC_MQTT_TOPIC as string;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;

class WeatherService {
  private client: mqtt.MqttClient;
  private weatherData: WeatherData;
  private listeners: ((data: WeatherData) => void)[] = [];

  constructor() {
    this.weatherData = {
      temperature: null,
      humidity: null,
      pressure: null,
      windSpeed: null,
      windDirection: null,
      rain: null,
    };

    this.client = mqtt.connect(mqttUrl);

    this.client.on("connect", () => {
      console.log("✅ Conectado ao MQTT");
      this.client.subscribe(topic);
    });

    this.client.on("message", (topic, message) => {
      this.handleMessage(topic, message.toString());
    });
  }

  private handleMessage(topic: string, message: string) {
    switch (topic) {
      case "weather/temperature":
        this.weatherData.temperature = parseFloat(message);
        break;
      case "weather/humidity":
        this.weatherData.humidity = parseFloat(message);
        break;
      case "weather/pressure":
        this.weatherData.pressure = parseFloat(message);
        break;
      case "weather/wind_speed":
        this.weatherData.windSpeed = parseFloat(message);
        break;
      case "weather/wind_direction":
        this.weatherData.windDirection = message;
        break;
      case "weather/rain":
        this.weatherData.rain = parseFloat(message);
        break;
      default:
        console.warn(`Tópico desconhecido: ${topic}`);
    }

    this.notifyListeners();
  }

  private notifyListeners() {
    this.listeners.forEach((callback) => callback(this.weatherData));
  }

  public subscribe(callback: (data: WeatherData) => void) {
    this.listeners.push(callback);
  }

  public getWeatherData(): WeatherData {
    return this.weatherData;
  }
}

export async function fetchWeatherHistory(start: string, end: string) {
  try {
    const response = await axios.get(`${API_BASE_URL}/weather/history`, {
      params: { start, end },
    });
    return response.data.data || [];
  } catch (error) {
    console.error("Erro ao buscar histórico de clima:", error);
    return [];
  }
}

export const weatherService = new WeatherService();
