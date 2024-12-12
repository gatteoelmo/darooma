import { DateStyled } from "./styles/DateStyled";

export const Date = () => {
  return (
    <DateStyled>
      <span>
        <p className="category">days</p>
        <p className="value">02</p>
      </span>
      <span>
        <p className="category">hours</p>
        <p className="value">07</p>
      </span>
      <span>
        <p className="category">min.</p>
        <p className="value">45</p>
      </span>
    </DateStyled>
  );
};
