import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loginPending, setLoginPending] = useState(false);
  const [loggedIn, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const login = (email, password) => {
    setLoginPending(true);
    setLoginSuccess(false);
    setLoginError(null);

    fetchLogin(email, password, (error) => {
      setLoginPending(false);

      if (!error) {
        setLoginSuccess(true);
      } else {
        setLoginError(error);
      }
    });
  };

  const logout = () => {
    setLoginPending(false);
    setLoginSuccess(false);
    setLoginError(null);
  };

  return (
    <UserContext.Provider
      value={{
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };

export default UserContext;

// fake login
const fetchLogin = (email, password, callback) =>
  setTimeout(() => {
    if (email === "admin" && password === "admin") {
      return callback(null);
    } else {
      return callback(new Error("Invalid email and password"));
    }
  }, 1000);
