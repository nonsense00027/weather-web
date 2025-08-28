import "./style.css";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import { useState } from "react";
import type { DataResponse } from "../common/types";
import HighlightCard from "../components/Card/HighlightCard";

export const Home = ({ data }: { data: DataResponse }) => {
  console.log(data);

  const currentForecast = data.forecast.forecastday[0];

  const [scale, setScale] = useState<"C" | "F">("C");
  return (
    <div className="home">
      <div className="home__content">
        {/* LEFT */}
        <Sidebar data={data} />

        {/* RIGHT */}
        <div className="home__content-right">
          <section className="home__forecast">
            <div className="home__forecast-header">
              <h3>Forecast</h3>
              <div className="home__forecast-header-scale">
                <button
                  className={scale === "C" ? "selected" : ""}
                  onClick={() => setScale("C")}
                >
                  °C
                </button>
                <button
                  className={scale === "F" ? "selected" : ""}
                  onClick={() => setScale("F")}
                >
                  °F
                </button>
              </div>
            </div>
            <ul>
              {data?.forecast?.forecastday.map((day) => (
                <li key={day.date}>
                  <Card
                    date={day.date}
                    condition={day.day.condition.code}
                    maxTemp={
                      scale === "C" ? day.day.maxtemp_c : day.day.maxtemp_f
                    }
                    minTemp={
                      scale === "C" ? day.day.mintemp_c : day.day.mintemp_f
                    }
                  />
                </li>
              ))}
            </ul>
          </section>
          <section className="home__highlights">
            <h3>Today's Highlights</h3>
            <ul>
              <li>
                <HighlightCard
                  title="UV"
                  value={currentForecast.day.uv}
                  description="Weak"
                  icon={"🌞"}
                />
              </li>
              <li>
                <HighlightCard
                  title="Humidity"
                  value={`${currentForecast.day.avghumidity}%`}
                  description="Weak"
                  icon="💧"
                />
              </li>
              <li>
                <HighlightCard
                  title="Real feel"
                  value={`${
                    scale === "C"
                      ? data.current.feelslike_c
                      : data.current.feelslike_f
                  }°`}
                  description="Weak"
                  icon="🌡️"
                />
              </li>
              <li>
                <HighlightCard
                  title="Pressure"
                  value={`${data.current.pressure_mb}`}
                  description="Weak"
                  icon="💨"
                />
              </li>
              <li>
                <HighlightCard
                  title="Sunset"
                  value={currentForecast.astro.sunset.split(" ")[0]}
                  description="Weak"
                  icon="🌇"
                />
              </li>
              <li>
                <HighlightCard
                  title="Visibility"
                  value={`${data.current.vis_km} km`}
                  description="Weak"
                  icon="👁️"
                />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
