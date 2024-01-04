import React, {useContext} from 'react';
import {UserContext} from '../../contexts/UserProvider';
import EmptyCard from '../../components/ui/EmptyCard';

const PurposeCard = () => {
  const {user} = useContext(UserContext);

  if (user === null) {
    return (
      <EmptyCard innerText='No Purpose provided' />
    );
  }
  return (
    <div className='quote-div'>
      <div className='card quote-container'>
        <blockquote className='quote-text'>{user.purpose}</blockquote>
        <cite className='quote-auther'>{user.firstName+' '+user.lastName}</cite>
      </div>
      <div className='action-div'>
        <button className='info-button'>Edit</button>
        <button className='danger-button'>Remove</button>
      </div>
    </div>
  );
};

export default PurposeCard;
