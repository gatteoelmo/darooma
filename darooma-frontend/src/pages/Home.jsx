import { HomeStyled } from "../components/styles/HomeStyled";
import gif from "../assets/gif/daroomaGif.gif";
import backImage from "../assets/img/tav-3-center.png";
import LogoFont from "../assets/img/logo font.svg";
import LogoSoya from "../assets/img/logo-soya.svg";
import Logo from "../assets/img/logo 2.svg";
import { useState } from "react";
import { Form } from "../components/Form.jsx";

export const Home = () => {
  const [visibleLogin, setVisibleLogin] = useState(false);

  return (
    <HomeStyled>
      <div className="topHome">
        <img src={Logo} alt="" className="logo" />
        <button
          onClick={() => {
            visibleLogin ? setVisibleLogin(false) : setVisibleLogin(true);
          }}
        >
          {visibleLogin ? "Close" : "Start"}
        </button>
        <img src={LogoSoya} alt="" className="soya" />
      </div>

      <div className="background">
        <div className="image-container">
          <img src={backImage} alt="" className="image" />
        </div>
        <div className="gif-container">
          <img src={gif} alt="" className="gif" />
        </div>
      </div>

      <div className="container">
        <div className="description">
          <h2>ONE APP TO ROLE THEM ALL</h2>
          <p>
            Darooma is your personal motivator and game master! Inspired by the
            Daruma&apos;s spirit of resilience, this app helps you set goals,
            track progress, and level up in life. Whether you&apos;re tackling
            everyday tasks or epic group challenges, Darooma turns every step
            into a rewarding adventure!
          </p>
        </div>
        <div className="logos">
          <img src={LogoFont} alt="" />
          <img src={LogoFont} alt="" />
          <img src={LogoFont} alt="" />
          <img src={LogoFont} alt="" />
          <img src={LogoFont} alt="" />
        </div>
      </div>

      {visibleLogin && <Form />}
    </HomeStyled>
  );
};
