import React, {useContext} from 'react';
import {UserContext} from '../../contexts/UserProvider';
import {Link, Navigate} from 'react-router-dom';
import logo from '../../assests/images/logo-white.png';
import LoginForm from '../../components/form/LoginForm';


const Login = () => {
  const {user} = useContext(UserContext);

  if (user !== null) {
    return <Navigate to='/' />;
  };

  return (
    <div className='login-page'>
      <div className="card login-container">
        <div className='logo-div'>
          <img src={logo} alt='My Journal Logo' className='logo-img'></img>
        </div>
        <h2 className='login-header'>Login</h2>
        <p className='login-subheading'>Please enter your details here</p>
        <LoginForm />
        <button className="google-btn">Sign in with Google</button>
        <p className='login-bottom-text'>
          Don&apos;t have an account? <Link to="/signup">SignUp</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
