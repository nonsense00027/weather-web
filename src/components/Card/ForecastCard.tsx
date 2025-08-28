import React from "react";
import "./style.css";
import { formatDate, getWeatherIcon } from "../../helpers";
import type { WeatherType } from "../../common/types";

interface CardProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  date: string;
  condition: WeatherType;
  maxTemp: number;
  minTemp: number;
}

const ForecastCard: React.FC<CardProps> = ({
  date,
  condition,
  maxTemp,
  minTemp,
}) => {
  return (
    <div className="card flex-column-center">
      <p className="card__date">{formatDate(date)}</p>
      {/* <Icon className="card__icon" type={condition} /> */}
      <p className="card__condition">{getWeatherIcon(condition)}</p>
      <div className="card__temps flex">
        <p className="card__max-temp">{maxTemp.toFixed(0)}°</p>
        <p>-</p>
        <p className="card__min-temp">{minTemp.toFixed(0)}°</p>
      </div>
    </div>
  );
};

export default ForecastCard;
