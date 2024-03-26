import React, { useState } from "react";
import "../CardProps/Card.css";

export interface CardProps {
  title: string;
  description: string;
  additionalContent?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  additionalContent,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card" onClick={handleClick}>
      <h3>{title}</h3>
      <p>{description}</p>
      {isExpanded && additionalContent}
    </div>
  );
};

export default Card;
