import React from "react";
import "../Card.css";

export interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => {
  return <div className={`card-footer ${className}`}>{children}</div>;
};

export default CardFooter;
