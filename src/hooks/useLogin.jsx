import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useLogin = () => {
  return useContext(AuthContext);
};

export default useLogin;
