// useRegister.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useRegister = () => {
  const navigate = useNavigate();
  const [firstName, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({
    firstName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password) => password.length >= 6;

  const handleSubmit = (event) => {
    event.preventDefault();

    const updateError = {
      firstName: firstName ? '' : 'First name is required',
      email: validateEmail(email) ? '' : 'Invalid email address',
      password: validatePassword(password) ? '' : 'Password must be at least 6 characters',
      confirmPassword: password === confirmPassword ? '' : 'Passwords do not match',
    };

    if (updateError.firstName || updateError.email || updateError.password || updateError.confirmPassword) {
      setError(updateError);
      return;
    }

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    console.log('Registration successful');
    navigate('/login');
  };

  return {
    firstName,
    email,
    password,
    confirmPassword,
    error,
    handleFirstnameChange: (event) => {
      setFirstname(event.target.value.trim());
      setError({ ...error, firstName: '' });
    },
    handleEmailChange: (event) => {
      setEmail(event.target.value.trim());
      setError({ ...error, email: '' });
    },
    handlePasswordChange: (event) => {
      setPassword(event.target.value.trim());
      setError({ ...error, password: '' });
    },
    handleConfirmPasswordChange: (event) => {
      setConfirmPassword(event.target.value.trim());
      setError({ ...error, confirmPassword: '' });
    },
    handleSubmit,
  };
};

export default useRegister;
