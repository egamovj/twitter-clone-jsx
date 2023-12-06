// useLogin.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    email: '',
    password: '',
  });

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password) => password.length >= 6;

  const handleSubmit = (event) => {
    event.preventDefault();

    const updateError = {
      email: validateEmail(email) ? '' : 'Invalid email address',
      password: validatePassword(password) ? '' : 'Password must be at least 6 characters',
    };

    if (updateError.email || updateError.password) {
      setError(updateError);
      return;
    }

    const registeredEmail = localStorage.getItem('email');
    const registeredPassword = localStorage.getItem('password');

    if (email === registeredEmail && password === registeredPassword) {
      console.log('Login successful');
      navigate('/profile');
    } else {
      setError({ email: 'Invalid credentials', password: 'Invalid credentials' });
    }
  };

  return {
    email,
    password,
    error,
    handleEmailChange: (event) => {
      setEmail(event.target.value.trim());
      setError({ ...error, email: '' });
    },
    handlePasswordChange: (event) => {
      setPassword(event.target.value.trim());
      setError({ ...error, password: '' });
    },
    handleSubmit,
  };
};

export default useLogin;
