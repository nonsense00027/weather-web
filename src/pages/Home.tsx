import "./style.css";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import { useState } from "react";
import type { DataResponse } from "../components/common/types";

export const Home = ({ data }: { data: DataResponse }) => {
  console.log(data);
  const [scale, setScale] = useState<"C" | "F">("C");
  return (
    <div className="home">
      <div className="home__content">
        {/* LEFT */}
        <Sidebar data={data} />

        {/* RIGHT */}
        <div className="home__content-right">
          <div className="home__content-right-header">
            <h3>Forecast</h3>
            <div className="home__content-right-header-scale">
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
          <section className="home__forecast">
            <ul>
              {data?.forecast?.forecastday.slice(1).map((day) => (
                <li key={day.date}>
                  <Card
                    date={day.date}
                    condition={day.day.condition.text}
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
        </div>
      </div>
    </div>
  );
};
