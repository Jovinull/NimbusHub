import mqtt from "mqtt";

type WeatherData = {
  temperature: number | null;
  humidity: number | null;
  pressure: number | null;
  windSpeed: number | null;
  windDirection: string | null;
  rain: number | null;
};

class WeatherService {
  private client: mqtt.MqttClient;
  private weatherData: WeatherData;

  constructor() {
    this.weatherData = {
      temperature: null,
      humidity: null,
      pressure: null,
      windSpeed: null,
      windDirection: null,
      rain: null,
    };

    this.client = mqtt.connect("wss://c0b8968ed7994cfda96d1e16cd9709243a0402e73e714189a5fdf292baf01769.s1.eu.hivemq.cloud:8884/mqtt");

    this.client.on("connect", () => {
      console.log("✅ Conectado ao MQTT");
      this.client.subscribe("weather/#");
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
  }

  // Método para obter os dados atualizados
  public getWeatherData(): WeatherData {
    return this.weatherData;
  }
}
