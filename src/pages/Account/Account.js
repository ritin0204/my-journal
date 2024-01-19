import React, {useContext, useState} from 'react';
import {UserContext} from '../../contexts/UserProvider';
import ProfileCard from './ProfileCard';
import EditAccount from './EditAccount';

const Account = () => {
  const {logoutUser} = useContext(UserContext);
  const [editing, setEditing] = useState(false);
  const changeEdit = () => {
    setEditing(!editing);
  };
  return (
    <div className='account-div'>
      <h1>Account</h1>
      {
        editing ? <EditAccount
          editing={editing}
          changeEdit={changeEdit}
        /> : <ProfileCard/>
      }
      {
        editing ? null :
        <div className='action-div'>
          <button className='info-button'
            onClick={changeEdit}>Edit Profile</button>
          <button onClick={() => logoutUser()} className='danger-button'>
            Logout
          </button>
        </div>
      }
    </div>
  );
};

export default Account;
