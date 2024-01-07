import React, {useEffect, useState} from 'react';
import Greeting from '../../components/ui/Greeting';
import JournalForm from '../../components/form/JournalForm';
import Calender from '../../components/ui/Calender';
import {Link} from 'react-router-dom';
import ViewJournal from './ViewJournal';
import journalList from '../../sample-data/Journals.json';

const Journal = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [journal, setJournal] = useState(journalList['journals'][0]);

  useEffect(() => {
    const currentDate = new Date();
    if (currentDate.toDateString() === selectedDate.toDateString()) {
      setJournal(journalList['journals'][0]);
    } else {
      setJournal(null);
    }
  }, [selectedDate]);

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
        {
          journal ? <ViewJournal journal={journal} />:
          <JournalForm />
        }
        <Calender selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}/>
      </div>
      <div>
        <Link to='/journals/all' className='button link-button'>
          See all journals</Link>
      </div>
    </div>
  );
};


export default Journal;
