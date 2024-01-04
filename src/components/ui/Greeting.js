import React from 'react';
import PropTypes from 'prop-types';

const Greeting = ({greetingHeading, greetingText}) => {
  return (
    <div className="greeting-div">
      <h1 className="greeting-heading">{greetingHeading}</h1>
      <p className="greeting-text">{greetingText}</p>
    </div>
  );
};

Greeting.propTypes = {
  greetingHeading: PropTypes.string.isRequired,
  greetingText: PropTypes.string.isRequired,
};

export default Greeting;
