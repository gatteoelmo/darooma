import { HeaderStyled } from "./styles/HeaderStyled.js";
import LogoFont from "../assets/img/logo font.svg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserById } from "../services/apiCalls.js";

export const Header = () => {
  const navigate = useNavigate();

  // states for xp and lvl
  const [xp, setXp] = useState(0);
  const [lvl, setLvl] = useState(0);

  // fetch xp and lvl from id in localstorage
  useEffect(() => {
    const userId = localStorage.getItem("id");
    if (userId) {
      getUserById(userId)
        .then((response) => {
          // console.log(response.data);
          setXp(response.data.xp);
          setLvl(response.data.level);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  // function to log out
  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <HeaderStyled>
      <img src={LogoFont} alt="" className="logo" />
      <div>XP: {xp}</div>
      <div>Lvl: {lvl}</div>
      <button onClick={() => logOut()}>Log out</button>
    </HeaderStyled>
  );
};
