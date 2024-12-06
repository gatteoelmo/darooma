import { HeaderStyled } from "./styles/HeaderStyled.js";
import LogoFont from "../assets/img/logo font.svg";
import LogoSoya from "../assets/img/logo-soya.svg";
// import Logo from "../assets/img/logo 2.svg";

export const Header = () => {
  return (
    <HeaderStyled>
      <img src={LogoFont} alt="" className="logo" />
      <button>START</button>
      <img src={LogoSoya} alt="" className="soya" />
      {/* <img src={LogoSoya} alt="" className="login" /> */}
    </HeaderStyled>
  );
};
