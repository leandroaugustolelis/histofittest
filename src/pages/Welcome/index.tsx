import React from "react";
import { useHistory } from "react-router-dom";

import "react-calendar-heatmap/dist/styles.css";
import "./styles.scss";
import Button from "../../components/Button";
import welcomeImage from "../../assets/welcome-image.svg";

const Welcome = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/signup");
  };

  return (
    <div className="welcome-container">
      <img src={welcomeImage} alt="" />
      <span> Welcome to Histofit</span>
      <p>
        Register your Health activities to achieve best results and improve
        discipline
      </p>
      <Button text="Get Started" onClick={handleClick}></Button>
    </div>
  );
};

export { Welcome };
