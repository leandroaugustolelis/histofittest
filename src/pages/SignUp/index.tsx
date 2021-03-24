import React, { useCallback } from "react";
import "./styles.scss";

import "react-calendar-heatmap/dist/styles.css";
import Button from "../../components/Button";

import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const handleSignUp = useCallback(async (data) => {
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

      toast.success("Register completed, please login", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      toast.error("Email already exists, use another email", {
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

  return (
    <div className="main-container">
      <span className="main-title">Welcome to Histofit</span>

      <form className="main-form" onSubmit={handleSubmit(handleSignUp)}>
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
        <Button text="Register" />
        <span>
          Already registered? <Link to="/signin">Login</Link>
        </span>
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

export { SignUp };
