import { HomeStyled } from "../components/styles/HomeStyled";
import LogoFont from "../assets/img/logo font.svg";
import LogoSoya from "../assets/img/logo-soya.svg";
import Logo from "../assets/img/logo 2.svg";
import { useState, useEffect } from "react";
import { Form } from "../components/Form.jsx";
import { toggleScale } from "../redux/backgroundSlice.js";
import { useDispatch } from "react-redux";
import { PreLoader } from "../components/PreLoader.jsx";

export const Home = () => {
  const [visibleLogin, setVisibleLogin] = useState(false);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // after 4 seconds, hide the preloader
    const animationTimer = setTimeout(() => {
      setStartAnimation(true);
    }, 4000); // after 4 seconds

    // after 5 seconds, hide the preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000); // after 6 seconds
    return () => {
      clearTimeout(animationTimer);
      clearTimeout(timer);
    };
  }, []);

  return (
    <HomeStyled>
      {loading && <PreLoader startAnimation={startAnimation} />}
      <div className="topHome">
        <img src={Logo} alt="" className="logo" />
        <button
          onClick={() => {
            visibleLogin ? setVisibleLogin(false) : setVisibleLogin(true);
            dispatch(toggleScale());
          }}
        >
          {visibleLogin ? "Close" : "Start"}
        </button>
        <img src={LogoSoya} alt="" className="soya" />
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
