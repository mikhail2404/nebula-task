import { useNavigate } from "react-router-dom";

const useNavigateFurther = (path: string) => {
  const navigate = useNavigate();

  const navigateFurther = () => {
    navigate(path);
  };

  return navigateFurther;
};

export default useNavigateFurther;
