import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
