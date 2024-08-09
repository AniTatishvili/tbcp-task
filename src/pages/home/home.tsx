import { useNavigate } from "react-router-dom";

import { FormAccessCard } from "../../widgets/form-access-card";

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/user-form");
  };

  return <FormAccessCard title="User validation form" content="Click here to access the form." onClick={handleClick} />;
};
