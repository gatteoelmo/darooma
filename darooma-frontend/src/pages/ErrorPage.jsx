import { ErrorPageStyled } from "../components/styles/ErrorPageStyled.js";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <ErrorPageStyled>
      <div className="loader-content">
        <div className="number">404</div>
        <div className="text">Page not found</div>
        <Link className="link" to="/">
          Back Home
        </Link>
      </div>
    </ErrorPageStyled>
  );
};
