import React, { useCallback } from "react";
import "./styles.scss";

import "react-calendar-heatmap/dist/styles.css";
import Button from "../../components/Button";

import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const { signIn } = useAuth();

  const handleSignUp = useCallback(
    async (data) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required("Email required")
            .email("Please enter a valid E-mail"),
          password: Yup.string().min(6, "Minimum 6 digits"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push("/dashboard");
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
    },
    [history, signIn]
  );

  return (
    <div className="main-container">
      <span className="main-title">Login</span>

      <form className="main-form" onSubmit={handleSubmit(handleSignUp)}>
        <input ref={register} name="email" type="text" placeholder="Email" />
        <input
          ref={register}
          name="password"
          type="password"
          placeholder="Password"
        />
        <Button text="Login" />
        <span>
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </span>

        <Link className="forgot-password" to="/forgot-password">
          Forgot Password
        </Link>
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

export { SignIn };
