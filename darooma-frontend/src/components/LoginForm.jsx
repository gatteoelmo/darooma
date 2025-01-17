import { useForm } from "react-hook-form";
import { login } from "../services/apiCalls";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleScale } from "../redux/backgroundSlice";

// eslint-disable-next-line react/prop-types
export const LoginForm = ({ state, setState }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await login(data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.user.name);
      localStorage.setItem("id", response.data.user._id);
      localStorage.setItem("email", response.data.user.email);
      navigate("/dashboard");
      dispatch(toggleScale());
    } catch (error) {
      console.log(error);
    }
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
        {...register("password", {
          required: "Password is required",
          validate: (value) => {
            if (value.length < 8) {
              return "Not valid :(";
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
      <button className="login">Log in</button>
      <button className="register-button" onClick={() => setState(!state)}>
        New here? Let&apos;s get you started on your adventure!
      </button>
    </form>
  );
};
