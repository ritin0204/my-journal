import React from 'react';
import Greeting from '../../components/ui/Greeting';
import JournalForm from '../../components/form/JournalForm';
import Calender from '../../components/ui/Calender';
import {Link} from 'react-router-dom';

const Journal = () => {
  const journalGreeting = {
    'greetingHeading': 'Welcome to Your Daily Journal',
    'greetingText': `Reflect on today\'s experiences 
      and capture your thoughts in writing. Your story matters!`,
  };
  return (
    <div className='journal-page'>
      <Greeting greetingHeading={journalGreeting.greetingHeading}
        greetingText={journalGreeting.greetingText} />
      <div className='journal-main-div'>
        {/* <Navigate to='/journal/today' /> */}
        <JournalForm />
        <Calender />
      </div>
      <Link to='/journals/all' className='button link-button'>
        See all journals</Link>
    </div>
  );
};


export default Journal;
