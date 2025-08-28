import React from "react";
import "./style.css";

interface HighlightCardProps {
  title: string;
  value: string | number;
  description: string;
  icon?: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  title,
  value,
  description,
  icon,
}) => {
  return (
    <div className="card highlight-card flex-column">
      <div className="highlight-card__info">
        <p className="card__title">{title}</p>
        <p className="card__value">{value}</p>
        <p className="card__description">{description}</p>
      </div>
      <p className="highlight-card__icon">{icon}</p>
    </div>
  );
};

export default HighlightCard;
