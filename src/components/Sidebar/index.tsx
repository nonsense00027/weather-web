import { formatDateToDay, getWeatherIcon } from "../../helpers";
import type { DataResponse } from "../../common/types";
import "./style.css";

function Sidebar({ data }: { data: DataResponse }) {
  const { current, forecast, location } = data;

  const todayForecast = forecast.forecastday[0];

  return (
    <div className="sidebar flex-column">
      <div className="sidebar__top flex-column">
        <p className="sidebar__icon-current">
          {getWeatherIcon(current.condition.text)}
        </p>

        <div className="sidebar__temp">
          <h3>{current.temp_c.toFixed(0)}</h3>
          <h3>°C</h3>
        </div>
        <p className="sidebar__time">
          {formatDateToDay(current.last_updated.split(" ")[0])},{" "}
          {current.last_updated.split(" ")[1]}
        </p>
      </div>

      <div className="sidebar__bottom flex-column">
        <div className="sidebar__bottom-condition">
          <p className="sidebar__icon">
            {getWeatherIcon(todayForecast.day.condition.text)}
          </p>
          <p className="sidebar__condition">
            {todayForecast.day.condition.text}
          </p>
        </div>
        <div className="sidebar__bottom-condition">
          <p className="sidebar__icon">{getWeatherIcon("Moderate rain")}</p>
          <p className="sidebar__rain-chance">
            Rain - {todayForecast.day.daily_chance_of_rain}%
          </p>
        </div>
        <div>
          <p>{`${location.name}, ${location.region}`}</p>
          <p>{location.country}</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
