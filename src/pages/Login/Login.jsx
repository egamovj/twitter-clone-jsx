import React from "react";

import useLogin from "../../components/useLogin/useLogin";

const Login = () => {
  const {
    email,
    password,
    error,
    handleSubmit,
    handleEmailChange,
    handlePasswordChange,
  } = useLogin();

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
      <button type="submit">Next</button>
    </form>
  );
};

export default Login;