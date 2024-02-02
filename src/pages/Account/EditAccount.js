import React, {useContext} from 'react';
import {UserContext} from '../../contexts/UserProvider';
import profileImg from '../../sample-data/profilepic.png';
import PropTypes from 'prop-types';


const EditAccount = ({changeEdit}) => {
  const {user} = useContext(UserContext);
  return (
    <div>
      <form className="card profile-container">
        <div className='profile-img-div'>
          <img src={
            user.image ? user.image :
            profileImg
          }
          alt="Profile Image"
          className="profile-image" />
        </div>
        <div className="user-info">
          <h2>Edit Profile</h2>
          <div className='user-info-text'>
            <label>Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              value={user.firstName +' '+ user.lastName}
              required
            />
            <label>Username: </label>
            <input
              type='text'
              value={user.username}
              name='username'
              id='username'
              placeholder='username'
              required
            />
            <label>Email: </label>
            <input
              type='email'
              value={user.email}
              name='email'
              id='email'
              placeholder='example@example.com'
              required
            />
            <label>Purpose: </label>
            <input
              type='text'
              value={user.purpose}
              name='purpose'
              id='purpose'
              placeholder='Purpose'
            />
          </div>
        </div>
      </form>
      <div className='action-div'>
        <button className='success-button'
          onClick={changeEdit}>
          Save
        </button>
      </div>
    </div>
  );
};

EditAccount.propTypes = {
  changeEdit: PropTypes.func,
};

export default EditAccount;
