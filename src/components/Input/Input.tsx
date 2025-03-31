import React from "react";
import "./Input.css";

export interface InputProps {
  placeholder: string;
  type?: string;
  value?: string;
  defaultValue?: string | number | readonly string[] | undefined;
  onChange?: (event: string) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  type = "text",
  defaultValue,
  onChange,
  className,
  value,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`input ${className}`}
      defaultValue={defaultValue}
      value={value}
      onChange={(e) => {
        e.preventDefault();
        onChange?.(e?.target?.value);
      }}
    />
  );
};

export default Input;
