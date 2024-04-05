import React from "react";
import "./button.css";

interface Props {
  type?: any;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button className="myButton" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
