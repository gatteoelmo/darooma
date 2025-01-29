import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createAccount } from "../services/apiCalls";

// eslint-disable-next-line react/prop-types
export const RegisterForm = ({ state, setState }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Utilizzo di useMutation per la registrazione
  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: createAccount, // Funzione da chiamare
    onSuccess: () => {
      setState(!state); // Cambia lo stato in caso di successo
    },
    onError: (error) => {
      console.log(error); // Gestione errori, potrebbe essere più specifico
    },
  });

  const onSubmit = (data) => {
    mutate(data); // Esegue la mutazione con i dati
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Join the club, Jedi! The Force is stronger with your account.</h2>

      {/* Nome */}
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
      {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

      {/* Email */}
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
      {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

      {/* Password */}
      <label htmlFor="password">Pick a strong one—no Kryptonite allowed.</label>
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
        placeholder={
          errors.password
            ? "Not valid :( It must be at least 8 characters"
            : "password"
        }
        name="password"
      />
      {errors.password && (
        <p style={{ marginTop: "5px" }}>{errors.password.message}</p>
      )}

      {/* Bottone di registrazione */}
      <button className="login" disabled={isLoading}>
        {isLoading ? (
          <span className="spinner"></span> // Mostra una "spinning" durante il caricamento
        ) : (
          "Sign up"
        )}
      </button>

      {/* Messaggio di errore */}
      {isError && (
        <div className="error-container">
          <p className="error-message">
            Something went wrong. Please try again.
            {error?.response?.data?.message && (
              <span>{error.response.data.message}</span>
            )}
          </p>
        </div>
      )}
    </form>
  );
};
