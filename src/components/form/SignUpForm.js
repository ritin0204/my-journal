import React, {useContext, useState} from 'react';
import {UserContext} from '../../contexts/UserProvider';
import {createUser} from '../../services/userApi';

const SignUpForm = () => {
  const {loginUser} = useContext(UserContext);
  const [tempUser, setTempUser] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setTempUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (tempUser.password === tempUser.confirmPassword) {
      createUser(tempUser);
    } else {
      setError('Both Password must be same!');
    }
    if (tempUser) {
      loginUser();
    } else {
      setError('Incorrect username or password');
    }
  };

  return (
    <div>
      <form className='login-form' onSubmit={handleFormSubmit}>
        {error && <p className='error-text'>{error}</p>}
        <div className='input-div'>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            value={tempUser.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='input-div'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            value={tempUser.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='input-div'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={tempUser.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='input-div'>
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="confirm password"
            value={tempUser.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className='login-button'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
