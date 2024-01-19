import React, {useContext} from 'react';
import profileImg from '../../sample-data/profilepic.png';
import {UserContext} from '../../contexts/UserProvider';
import {convertToReadableDate} from '../../utils/timeUtils';


const ProfileCard = () => {
  const {user} = useContext(UserContext);
  return (
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
  );
};

export default ProfileCard;
