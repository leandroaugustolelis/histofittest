import React, { useEffect } from "react";
import * as AiIcons from "react-icons/ai";

import "react-calendar-heatmap/dist/styles.css";
import "./styles.scss";
import { useAuth } from "../../hooks/auth";

import AvatarImage from "../../assets/avatar-image.svg";
import { api } from "../../services/api";

const Dashboard = () => {
  const { signOut, user } = useAuth();

  const loadPosts = async () => {
    const response = await api.get("/posts");

    console.log(response);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="home-container">
      <div className="home-photo">
        <img src={user.avatarUrl ? user.avatarUrl : AvatarImage} alt="avatar" />
      </div>
      <span>Hello,{user.name}</span>
    </div>
  );
};

export { Dashboard };
