import { NavLink } from "react-router-dom";
import logo from "../../../assets/new-logo.svg";

export const Logotype = () => {
  return (
    <NavLink to="/">
      <img src={logo} alt="logotype" />
    </NavLink>
  );
};
