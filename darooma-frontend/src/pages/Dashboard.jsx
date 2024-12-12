import { DashboardStyled } from "../components/styles/DashboardStyled";
import { Header } from "../components/Header";
import { Goal } from "../components/Goal";

export const Dashboard = () => {
  return (
    <DashboardStyled>
      <Header />
      <div className="blur"></div>
      <div className="hello">
        <h2>Hello, ?name?! Let’s rack up some XP.</h2>
      </div>
      <div className="goals-container">
        <Goal />
        <Goal />
        <Goal />
        <Goal />
        <Goal />
        <Goal />
        <Goal />
        <Goal />
        <Goal />
        <Goal />
      </div>
    </DashboardStyled>
  );
};
