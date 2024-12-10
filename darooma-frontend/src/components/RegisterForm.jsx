import { useForm } from "react-hook-form";
import { createAccount } from "../services/apiCalls";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    try {
      console.log(data);
      createAccount(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Join the club, Jedi! The Force is stronger with your account.</h2>
      <label htmlFor="name">
        No pressure, just your identity for the Hall of Fame.
      </label>
      <input
        style={errors.name && { border: "1px solid red" }}
        {...register("name", { required: "Name is required" })}
        type="text"
        placeholder={errors.name ? "Name is required" : "name"}
        name="name"
      />
      <label htmlFor="email">Where can we send your Hogwarts letter?</label>
      <input
        style={errors.email && { border: "1px solid red" }}
        {...register("email", {
          required: "Email is required",
          validate: (value) => {
            if (!value.includes("@")) {
              return "mmmhhh, magic and valid Potter";
            }
            return true;
          },
        })}
        type="text"
        placeholder={errors.email ? "Email is required" : "email"}
        name="email"
      />
      {errors.email && (
        <p style={{ marginTop: "5px" }}>{errors.email.message}</p>
      )}
      <label htmlFor="password">Pick a strong one—no Kryptonite allowed.</label>
      <input
        style={errors.password && { border: "1px solid red" }}
        {...register("password", { required: "Password is required" })}
        type="password"
        placeholder={errors.password ? "Not valid :(" : "password"}
      />
      <button className="login">Sign up</button>
    </form>
  );
};
