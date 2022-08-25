import React, { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const { login, loginError, setLoginError, setLoginForm } = useLogin();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.email && user.password) {
      if (isValidEmail(user.email)) {
        login(user.email, user.password);
      } else {
        setLoginError("Invalid email");
      }
    } else {
      setLoginError("The fields are required");
    }
  };

  return (
    <div className="wrap-form">
      <div className="form">
        <span onClick={() => setLoginForm(false)}>&#10006;</span>
        <form name="loginForm" onSubmit={handleSubmit}>
          <label htmlFor="email">Email de Usuario</label>
          <input
            type="email"
            name="email"
            onChange={(e) =>
              setUser({
                ...user,
                [e.target.name]: e.target.value,
              })
            }
            value={user.email}
            placeholder="email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) =>
              setUser({
                ...user,
                [e.target.name]: e.target.value,
              })
            }
            value={user.password}
            placeholder="password"
          />
          <input className="btn-primary" type="submit" value="Login" />
          {loginError && <div className="error">{loginError}</div>}

          <p>fake user: admin@admin.com admin123</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
