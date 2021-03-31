import React, { useCallback, ChangeEvent, useEffect } from "react";
import "./styles.scss";

import "react-calendar-heatmap/dist/styles.css";
import Button from "../../components/Button";

import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import AvatarImage from "../../assets/avatar-image.svg";

import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";
import { FiCamera } from "react-icons/fi";

const Profile = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { user, updateUser } = useAuth();
  const { addToast } = useToast();

  useEffect(() => {
    if (user) {
      setValue("name", user.name);
      setValue("email", user.email);
    }
  }, [user]);

  const handleChangeProfile = useCallback(async (data) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Name required"),
        email: Yup.string()
          .required("Email required")
          .email("Please enter a valid E-mail"),
        password: Yup.string().min(6, "Minimum 6 digits"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post("/users", data);

      toast.success("Profile updated", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      toast.error("Email already exists, choose another", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, []);

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append("avatar", e.target.files[0]);

        api.patch("/users/avatar", data).then((response) => {
          updateUser(response.data);

          toast.success("Avatar updated", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
      }
    },
    [addToast, updateUser]
  );

  return (
    <div className="main-container">
      <span className="main-title">Change Profile Info</span>

      <div className="home-photo">
        <img
          src={user.avatarUrl ? user.avatarUrl : AvatarImage}
          alt={user.name}
        />
        <label htmlFor="avatar">
          <FiCamera />
          <input type="file" id="avatar" onChange={handleAvatarChange} />
        </label>
      </div>

      <form className="main-form" onSubmit={handleSubmit(handleChangeProfile)}>
        <input ref={register} name="name" type="text" placeholder="Full Name" />
        <input ref={register} name="email" type="text" placeholder="Email" />
        <input
          ref={register}
          name="password"
          type="password"
          placeholder="Password"
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
        />
        <Button text="Update" />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />
      </form>
    </div>
  );
};

export { Profile };
