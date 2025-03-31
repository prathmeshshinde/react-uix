import React from "react";
import "./Button.css";

export interface ButtonProps {
  children?: React.ReactNode;
  icon?: string;
  type?: "primary" | "secondary" | "danger";
  size?: "small" | "default" | "large";
  htmlType?: "button" | "submit" | "reset";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  type,
  size,
  htmlType = "button",
  className,
  onClick,
}) => {
  const getClassName = () => {
    const typeClass = type ? `btn-${type}` : "";
    const sizeClass = size ? `btn-${size}` : "";
    return `btn ${typeClass} ${sizeClass} ${className}`.trim();
  };
  return (
    <button className={getClassName()} type={htmlType} onClick={onClick}>
      {icon && <img src={icon} alt="icon" width={16} height={14} />}
      {children}
    </button>
  );
};

export default Button;
