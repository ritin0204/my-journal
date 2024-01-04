import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Error = ({errorMessege='404! Not Found Error'}) => {
  return (
    <div className='error-page'>
      <h1>{errorMessege}</h1>
      <p>
        <Link to="/">Go to Home</Link>
      </p>
    </div>
  );
};

Error.propTypes = {
  errorMessege: PropTypes.string,
};

export default Error;
