import React, {useContext} from 'react';
import {UserContext} from '../../contexts/UserProvider';

const Account = () => {
  const {user, logoutUser} = useContext(UserContext);
  return (
    <div className='account-div'>
      <h1>Account</h1>
      <p>{user.firstName}</p>
      <button onClick={() => logoutUser()}>Logout</button>
    </div>
  );
};

export default Account;
