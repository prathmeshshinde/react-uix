import React from "react";
import "./Badge.css";

export interface BadgeProps {
  children?: React.ReactNode;
  variant?: "secondary" | "outline" | "danger";
}

const Badge: React.FC<BadgeProps> = ({ children, variant }) => {
  const getClassName = () => {
    const variantClass = variant ? `badge-${variant}` : "";
    return `badge ${variantClass}`.trim();
  };
  return <div className={getClassName()}>{children}</div>;
};

export default Badge;
