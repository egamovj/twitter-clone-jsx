import React from "react";
import './register.css'

import useRegister from "../../components/useRegister/useRegister";

const Register = () => {
  const {
    firstName,
    email,
    password,
    confirmPassword,
    error,
    handleSubmit,
    handleFirstnameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
  } = useRegister();

  return (
    <form className="register" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleFirstnameChange}
        value={firstName}
        placeholder="Name"
      />
      {error.firstName && <p>{error.firstName}</p>}
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
      <input
        type="password"
        onChange={handleConfirmPasswordChange}
        value={confirmPassword}
        placeholder="Confirm your  password"
      />
      {error.confirmPassword && <p>{error.confirmPassword}</p>}
      <button type="submit">Next</button>
    </form>
  );
};

export default Register;