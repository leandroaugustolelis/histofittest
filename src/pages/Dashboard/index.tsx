import React, { useState, useEffect } from "react";

import "react-calendar-heatmap/dist/styles.css";
import "./styles.scss";
import CalendarHeatmap from "react-calendar-heatmap";
import { useAuth } from "../../hooks/auth";

import AvatarImage from "../../assets/avatar-image.svg";

const Dashboard = () => {
  const { signOut, user } = useAuth();
  // const [values, setValues] = useState([]);

  // const onClick = (value: any) => {
  //   console.log(value);
  // };

  // useEffect(() => {
  //   // setValues([
  //   //   { date: "2016-01-12", count: 4 },
  //   //   { date: "2016-01-22", count: 1 },
  //   //   { date: "2016-01-30", count: 3 },
  //   // ]);
  //   console.log("lalala");
  // }, []);

  return (
    <div className="home-container">
      <div className="home-photo">
        <img src={user.avatarUrl ? user.avatarUrl : AvatarImage} alt="avatar" />
      </div>
      <span>Hello,{user.name}</span>
      Days you exercised yourself
      {/* <CalendarHeatmap
        endDate={new Date("2017-01-01")}
        numDays={365}
        values={values}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-scale-${value.count}`;
        }}
        onClick={onClick}
      /> */}
    </div>
  );
};

export { Dashboard };
