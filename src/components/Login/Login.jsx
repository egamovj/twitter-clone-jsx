import React from "react";
import useRegister from "../useRegister/useRegister";

const Login = () => {
  const {
    email,
    password,
    handlePasswordChange,
    handleEmailChange,
    handleSubmit,
    error,
  } = useRegister();

  return (
    <form className="register" onSubmit={handleSubmit}>
      <input
        type="email"
        onChange={handleEmailChange}
        value={email}
        placeholder="Enter your  email"
      />
      {error.email && <p>{error.email}</p>}
      <input
        type="password"
        onChange={handlePasswordChange}
        value={password}
        placeholder="Enter your  password"
      />
      {error.password && <p>{error.password}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;