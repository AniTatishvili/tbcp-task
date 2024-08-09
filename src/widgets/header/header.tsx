import { NavLink } from "react-router-dom";

import { TiHome } from "react-icons/ti";

import Logo from "../../assets/new-logo.svg";

export const Header = () => {
  return (
    <div className="w-full shadow-md">
      <div className="max-w-[80%] w-full flex justify-between items-center m-auto py-3">
        <img src={Logo} alt="Logo" />
        <NavLink to="/" className="flex items-center gap-2 text-[#000] text-[2rem]">
          <TiHome />
          <span>Home</span>
        </NavLink>
      </div>
    </div>
  );
};
