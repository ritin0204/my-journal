import React, {useContext} from 'react';
import {getGreeting} from '../../utils/timeUtils';
import Greeting from '../../components/ui/Greeting';
import PurposeCard from './PurposeCard';
import Dashboard from '../Dashboard/Dashboard';
import {UserContext} from '../../contexts/UserProvider';

const Home = () => {
  const greeting = getGreeting();
  const {user, logoutUser} = useContext(UserContext);

  return (
    <div className='home-page'>
      <button onClick={() => logoutUser()}>Logout</button>
      <Greeting
        greetingHeading={greeting+' '+user.firstName+'!'}
        greetingText="Step Into the My-Journal Experience."/>

      <PurposeCard />
      <Dashboard />
    </div>
  );
};

export default Home;
