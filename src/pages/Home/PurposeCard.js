import React, {useContext, useRef, useState} from 'react';
import {UserContext} from '../../contexts/UserProvider';
import EmptyCard from '../../components/ui/EmptyCard';

const PurposeCard = () => {
  const {user} = useContext(UserContext);
  const [editState, setEditState] = useState(false);
  const purposeText = useRef(null);
  const [error, setError] = useState('');
  const [purpose, setPurpose] = useState(user.purpose);

  const handleEditClick = () => {
    setEditState(!editState);
  };

  const handlePurposeSave = () => {
    // Use it for ApI update
    const purposeChanged = purposeText.current.value;
    if (purposeChanged.replace(/\s/g, '') === '') {
      setError('Purpose can not be empty.');
    } else {
      user.purpose = purposeChanged;
      setEditState(!editState);
      setPurpose(purposeChanged);
    }
  };

  const handlePurposeChange = () => {
    const purposeChanged = purposeText.current.value;
    if (purposeChanged.replace(/\s/g, '') === '') {
      setError('Purpose can not be empty.');
    } else {
      setError('');
    }
  };

  const deletePurpose = () => {
    setPurpose(null);
    user.purpose = null;
  };

  if (editState) {
    return (
      <div className='quote-div'>
        <div className='card quote-container'>
          <textarea
            ref={purposeText}
            rows="10"
            cols="100"
            onChange={handlePurposeChange}
            defaultValue={user.purpose}
            required
          />
          {error && <p className='error-text'>{error}</p>}
        </div>
        <div className='action-div'>
          <button className='success-button' onClick={handlePurposeSave}>
            Save
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className='quote-div'>
      {
        purpose === null ?<EmptyCard innerText='No Purpose provided' /> :
        <div className='card quote-container'>
          <blockquote className='quote-text'>{user.purpose}</blockquote>
          <cite className='quote-auther'>
            {user.firstName+' '+user.lastName}
          </cite>
        </div>
      }
      <div className='action-div'>
        <button className='info-button' onClick={handleEditClick}>Edit</button>
        <button className='danger-button' onClick={deletePurpose}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default PurposeCard;
