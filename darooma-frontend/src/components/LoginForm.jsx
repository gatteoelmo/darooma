import { useForm } from "react-hook-form";

// eslint-disable-next-line react/prop-types
export const LoginForm = ({ state, setState }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Welcome back, adventurer. The quest awaits!</h2>
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
      <label htmlFor="password">Your key to the vault.</label>
      <input
        style={errors.password && { border: "1px solid red" }}
        {...register("password", { required: "Password is required" })}
        type="password"
        placeholder={errors.password ? "Not valid :(" : "password"}
      />
      <button className="login">Log in</button>
      <button className="register-button" onClick={() => setState(!state)}>
        New here? Let&apos;s get you started on your adventure!
      </button>
    </form>
  );
};
