import React, { useCallback } from "react";
import "./styles.scss";

import "react-calendar-heatmap/dist/styles.css";
import Button from "../../components/Button";

import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

import { useForm } from "react-hook-form";
import { api } from "../../services/api";

const ForgotPassword = () => {
  const { register, handleSubmit } = useForm();

  const handleForgotPassword = useCallback(async (data) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("Email required")
          .email("Please enter a valid E-mail"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post("/password/forgot", {
        email: data.email,
      });

      toast.success("Forgot Password email was sent, please check your email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      toast.error("Credential error! Try again", {
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
      <span className="main-title">Forgot Password</span>

      <form className="main-form" onSubmit={handleSubmit(handleForgotPassword)}>
        <input ref={register} name="email" type="text" placeholder="Email" />
        <Button text="Submit" />
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

export { ForgotPassword };
