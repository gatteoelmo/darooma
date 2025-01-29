import { HeaderStyled } from "./styles/HeaderStyled.js";
import LogoFont from "../assets/img/logo font.svg";
// import LogoSoya from "../assets/img/logo-soya.svg";
// import Logo from "../assets/img/logo 2.svg";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <HeaderStyled>
      <img src={LogoFont} alt="" className="logo" />
      <button onClick={() => logOut()}>Log out</button>
    </HeaderStyled>
  );
};
