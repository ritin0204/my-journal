import React, {useState} from 'react';
// import journals from '../../sample-data/Journals.json';

// const journalList = journals['journals'];

const JournalForm = () => {
  const [error, setError] = useState('');
  const [journalData, setJournalData] = useState({
    'title': '',
    'description': '',
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setJournalData((journalData) => ({
      ...journalData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (journalData.title.replace(/\s/g, '') === '') {
      setError('Title can not be empty');
    } else if (journalData.description.replace(/\s/g, '') === '') {
      setError('Don\'t Let your thoughts be empty');
    } else {
      setError('');
      console.log('Dats Added successfully');

      // Don't let users databe gone if it's not saved in
      // database due to some error
      // so make sure to store it in local storage
      e.target.reset();
    }
  };

  return (
    <div className='journal-form-div'>
      <form className='journal-form' onSubmit={handleFormSubmit}>
        <div className='card'>
          <div className='input-div'>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='input-div'>
            <label htmlFor="thoughts">Thoughts:</label>
            <textarea
              name='description'
              onChange={handleInputChange}
              placeholder='Write your thoughts here...'
              required
            />
          </div>
          {error && <p className='error-text'>{error}</p>}
        </div>
        <div className='action-div'>
          <button className='success-button'>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default JournalForm;
