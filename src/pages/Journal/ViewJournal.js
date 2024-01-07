import React from 'react';
import PropTypes from 'prop-types';
import {convertTo12HourFormat} from '../../utils/timeUtils';

const ViewJournal = ({journal=null}) => {
  return (
    <div>
      <div className='card view-journal'>
        <h2 className='journal-title'>{journal.Title}</h2>
        <div className='journal-timestamp'>
          <small>Date: {journal.Date}</small><br></br>
          <small>Time: {convertTo12HourFormat(journal.Time)}</small>
        </div>
        <p className='journal-description'>
          {journal.Description}
        </p>
      </div>
      <button className='info-button'>Edit</button>
    </div>
  );
};

ViewJournal.propTypes = {
  journal: PropTypes.any,
};

export default ViewJournal;
