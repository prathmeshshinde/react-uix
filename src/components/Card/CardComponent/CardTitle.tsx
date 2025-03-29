import React from "react";
import "../Card.css";

export interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => {
  return <h3 className={`card-title ${className}`}>{children}</h3>;
};

export default CardTitle;
