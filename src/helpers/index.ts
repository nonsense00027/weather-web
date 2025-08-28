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
  1111: "☀️",
  1112: "☁️",
  1003: "☁️",
  1002: "☁️",
  1063: "🌦️",
  1240: "🌧️",
  1150: "🌧️",
  1189: "🌧️",
  1183: "🌧️",
  1153: "🌧️",
  1195: "⛈️",
};

export function getWeatherIcon(condition: WeatherType) {
  return icons[condition] ?? "🌈";
}

export function getLocation(): Promise<{
  latitude: number;
  longitude: number;
}> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ latitude, longitude });
        },
        (error) => reject(new Error("Geolocation error: " + error.message))
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
}
