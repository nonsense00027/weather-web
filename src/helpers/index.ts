import type { WeatherType } from "../common/types";

export function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export function formatDateToDay(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
  });
}

const icons: Record<WeatherType, string> = {
  sunny: "☀️",
  cloudy: "☁️",
  "Partly cloudy": "☁️",
  Overcast: "☁️",
  "Patchy rain nearby": "🌦️",
  "Light rain": "🌧️",
  "Moderate rain": "🌧️",
  "Heavy rain": "⛈️",
};

export function getWeatherIcon(condition: WeatherType) {
  return icons[condition] ?? "🌈";
}

export function formatTemperature(temp: number, scale: "C" | "F") {
  return `${temp.toFixed(0)}°${scale === "C" ? "C" : "F"}`;
}
