import React from 'react';
import {Link} from 'react-router-dom';

const Journal = () => {
  return (
    <div className='journal-page'>
      <h1>Hi there</h1>
      <div className='journal-nav'>
        I am NovaBarr
        <Link to='/journal/today'>Today</Link>
        <Link to='/journal/calender'>Calender</Link>
      </div>
      <div className='journal-main-div'>
        {/* <Navigate to='/journal/today' /> */}
      </div>
    </div>
  );
};


export default Journal;
