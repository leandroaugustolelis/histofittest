import React, { ButtonHTMLAttributes } from "react";

import "./styles.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, ...rest }) => {
  return (
    <button className="button-container" {...rest}>
      {text}
    </button>
  );
};

export default Button;
