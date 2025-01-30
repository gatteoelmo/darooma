import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { login } from "../services/apiCalls";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleScale } from "../redux/backgroundSlice";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const LoginForm = ({ state, setState }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // using useMutation to call the login API
  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: login,
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (response) => {
      setLoading(false);
      // Salvataggio dei dati nel localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.user.name);
      localStorage.setItem("id", response.data.user._id);
      navigate("/dashboard"); // Redirect to dashboard
      dispatch(toggleScale());
    },
    onError: (error) => {
      console.log("there is an error in login");
      console.error(error);
    },
  });

  const onSubmit = async (data) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Welcome back, adventurer. The quest awaits!</h2>

      {/* email input */}
      <label htmlFor="email">What&apos;s your magic email, wizard?</label>
      <input
        style={errors.email && { border: "1px solid red" }}
        {...register("email", {
          required: "Email is required",
          validate: (value) => {
            if (!value.includes("@")) {
              return "Magic and valid";
            }
            return true;
          },
        })}
        type="text"
        placeholder={errors.email ? "Magic & valid Potter" : "email"}
        name="email"
      />
      {errors.email && (
        <p style={{ marginTop: "5px" }}>{errors.email.message}</p>
      )}

      {/*  password input */}
      <label htmlFor="password">Your key to the vault.</label>
      <input
        style={errors.password && { border: "1px solid red" }}
        {...register("password", {
          required: "Password is required",
          validate: (value) => {
            if (value.length < 8) {
              return "Not valid :( It must be at least 8 characters";
            }
            return true;
          },
        })}
        type="password"
        placeholder={errors.password ? "Not valid :(" : "password"}
        name="password"
      />
      {errors.password && (
        <p style={{ marginTop: "5px" }}>{errors.password.message}</p>
      )}

      {/*login */}
      <button className="login" disabled={isLoading}>
        {loading ? "loggin in..." : "Log in"}
      </button>

      {/* registrazione */}
      <button className="register-button" onClick={() => setState(!state)}>
        New here? Let&apos;s get you started on your adventure!
      </button>

      {/* errors */}
      {isError && (
        <p style={{ color: "red", marginTop: "10px" }}>
          Something went wrong. Please try again.
          {error?.response?.data?.message && (
            <span>{error.response.data.message}</span>
          )}
        </p>
      )}
    </form>
  );
};
