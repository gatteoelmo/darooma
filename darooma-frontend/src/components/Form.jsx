import { FormStyled } from "./styles/FormStyled";
import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const Form = () => {
  // State for register page
  const [visibleRegister, setVisibleRegister] = useState(false);

  return (
    <FormStyled>
      {!visibleRegister ? (
        <LoginForm state={visibleRegister} setState={setVisibleRegister} />
      ) : (
        <RegisterForm state={visibleRegister} setState={setVisibleRegister} />
      )}
    </FormStyled>
  );
};
