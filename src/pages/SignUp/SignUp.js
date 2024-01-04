import React, {useContext} from 'react';
import {UserContext} from '../../contexts/UserProvider';
import {Link, Navigate} from 'react-router-dom';
import logo from '../../assests/images/logo-white.png';
import SignUpForm from '../../components/form/SignUpForm';


const SignUp = () => {
  const {user} = useContext(UserContext);

  if (user !== null) {
    return <Navigate to='/' />;
  };

  return (
    <div className='signup-page'>
      <div className="card signup-container">
        <div className='logo-div'>
          <img src={logo} alt='My Journal Logo' className='logo-img'></img>
        </div>
        <h2 className='signup-header'>Sign Up</h2>
        <p className='signup-subheading'>Please enter your details here</p>
        <SignUpForm />
        <button className="google-btn">Sign Up with Google</button>
        <p className='login-bottom-text'>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
