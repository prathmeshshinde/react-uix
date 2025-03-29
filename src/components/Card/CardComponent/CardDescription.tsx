import React from "react";
import "../Card.css";

export interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  className,
}) => {
  return <h4 className={`card-description ${className}`}>{children}</h4>;
};

export default CardDescription;
