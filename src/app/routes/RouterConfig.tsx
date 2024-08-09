import { Route, Routes } from "react-router-dom";

import { Home } from "../../pages/home";
import { UserForm } from "../../pages/user-form";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-form" element={<UserForm />} />
    </Routes>
  );
};
