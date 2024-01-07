import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';

// Create a context
const UserContext = createContext();
const tempUser = {
  'firstName': 'Ritin',
  'lastName': 'Tiwari',
  'username': 'ritin0204',
  'email': 'ritintiwari417@gmail.com',
  'purpose': `The purpose of life is to become 
  free from everything and do great work.`,
  'lastLogin': '2023-05-15T08:30:00',
  'profileImageUrl': '../../sample-data/profilepic.png',
};

// Create a provider component
const UserProvider = ({children}) => {
  const [user, setUser] = useState(tempUser);

  const loginUser = (userData=tempUser) => {
    setUser(userData);
  };

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{user, loginUser, logoutUser}}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {UserContext, UserProvider};
