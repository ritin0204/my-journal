import React, {useContext} from 'react';
import {UserContext} from '../../contexts/UserProvider';
import profileImg from '../../sample-data/profilepic.png';
import {convertToReadableDate} from '../../utils/timeUtils';

const Account = () => {
  const {user, logoutUser} = useContext(UserContext);
  return (
    <div className='account-div'>
      <h1>Account</h1>
      <div className="card profile-container">
        <div className='profile-img-div'>
          <img src={profileImg} alt="Profile Image" className="profile-image" />
        </div>
        <div className="user-info">
          <h2>User Profile</h2>
          <div className='user-info-text'>
            <strong>Name: </strong>
            <p>{user.firstName} {user.lastName}</p>
            <strong>Username: </strong>
            <p>{user.username}</p>
            <strong>Email: </strong>
            <p>{user.email}</p>
            <strong>Purpose: </strong>
            <p>{user.purpose}</p>
            <strong>Last Login: </strong>
            <p>
              {convertToReadableDate(user.lastLogin)}
            </p>
          </div>
        </div>
      </div>
      <div className='action-div'>
        <button className='info-button'>Edit Profile</button>
        <button onClick={() => logoutUser()} className='danger-button'>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Account;
