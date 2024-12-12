import { HeaderStyled } from "./styles/HeaderStyled.js";
import LogoFont from "../assets/img/logo font.svg";
// import LogoSoya from "../assets/img/logo-soya.svg";
// import Logo from "../assets/img/logo 2.svg";
import { useDispatch } from "react-redux";
import { toggleScale } from "../redux/backgroundSlice.js";
export const Header = () => {
  const dispatch = useDispatch();
  return (
    <HeaderStyled>
      <img src={LogoFont} alt="" className="logo" />
      <button onClick={() => dispatch(toggleScale())}>Profile</button>
    </HeaderStyled>
  );
};
