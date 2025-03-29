import React, { useEffect } from "react";
import "./Alert.css";
import Cross from "../../assets/cross.svg";
import ErrorIcon from "../../assets/error.svg";
import InfoIcon from "../../assets/info.svg";
import WarningIcon from "../../assets/warning.svg";
import successIcon from "../../assets/success.svg";

export interface AlertProps {
  message?: string;
  type?: "success" | "info" | "warning" | "error";
  closable?: boolean;
}

const Alert: React.FC<AlertProps> = ({ type, message, closable }) => {
  const getClassName = () => {
    const typeClass = type ? `alert-${type}` : "";
    return `alert ${typeClass}`.trim();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const removeAlert = document.querySelector(".alert");
      removeAlert?.classList.add("slideup");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    const removeAlert = document.querySelector(".alert");
    removeAlert?.classList.add("slideup");
  };

  return (
    <div className={getClassName()}>
      <div className="alertContent">
        <img
          src={
            type === "error"
              ? ErrorIcon
              : type === "info"
              ? InfoIcon
              : type === "warning"
              ? WarningIcon
              : successIcon
          }
          alt="Alerticon"
          className="alertIcon"
        />
        {message}
      </div>
      {closable && (
        <button className="closeButton" onClick={handleClose}>
          <img src={Cross} alt="close" className="closeLogo" />
        </button>
      )}
    </div>
  );
};

export default Alert;
