import React from "react";
import "../Card.css";

export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
  return <div className={`card-header ${className}`}>{children}</div>;
};

export default CardHeader;
