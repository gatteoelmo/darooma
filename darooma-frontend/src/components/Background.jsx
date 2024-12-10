import gif from "../assets/gif/daroomaGif.gif";
import backImage from "../assets/img/tav-3-center.png";
import { BackgroundStyled } from "./styles/BackgroundStyled";
import { useSelector } from "react-redux";

export const Background = () => {
  const background = useSelector((state) => state.background.isScaled);

  return (
    <BackgroundStyled>
      <div className={background ? "background scaled" : "background"}>
        <div className="image-container">
          <img src={backImage} alt="" className="image" />
        </div>
        <div className="gif-container">
          <img src={gif} alt="" className="gif" />
        </div>
      </div>
    </BackgroundStyled>
  );
};
