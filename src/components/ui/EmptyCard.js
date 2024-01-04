import React from 'react';
import PropTypes from 'prop-types';

const EmptyCard = ({innerText='No content provided'}) => {
  return (
    <div className='card empty-card'>
      <p className='empty-card-text'>{innerText}</p>
    </div>
  );
};

EmptyCard.propTypes = {
  innerText: PropTypes.string.isRequired,
};

export default EmptyCard;
