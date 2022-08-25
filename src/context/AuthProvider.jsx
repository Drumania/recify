import React, { createContext, useState } from "react";

const AuthContext = createContext();

const ContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [loginForm, setLoginForm] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(null);

  const login = (email, password) => {
    if (email === "admin@admin.com" && password === "admin123") {
      return (
        setUser({
          nombre: "martin",
          email,
          password,
        }),
        setIsLogged(true),
        setLoginError(null),
        setLoginForm(false)
      );
    } else {
      return (
        setIsLogged(false), setUser(false), setLoginError("Unregistered user")
      );
    }
  };

  const logout = () => {
    setIsLogged(false), setUser(false), setLoginError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        user,
        loginError,
        login,
        setLoginError,
        loginForm,
        setLoginForm,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { ContextProvider };

export default AuthContext;
