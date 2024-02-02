import React, {createContext, useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {getUser} from '../services/userApi';
import Cookies from 'js-cookie';

// Create a context
const UserContext = createContext();

// Create a provider component
const UserProvider = ({children}) => {
  const currentUsername = Cookies.get('_currentUsername');
  const [user, setUser] = useState(null);

  useEffect(() =>{
    if (currentUsername) {
      loginUser(currentUsername);
    }
  }, []);

  const loginUser = (username=currentUsername) => {
    getUser(username).then( (user) => {
      setUser(user);
    }).catch((error) => {
      setUser(null);
    });
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

const logoutUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {UserContext, UserProvider, logoutUser};
