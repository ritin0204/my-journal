import React, {useState} from 'react';

const ActivityList = () => {
  const [searchform, setSearchForm] = useState({
    title: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const [name, value] = e.target;
    setSearchForm({...searchform, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('prevented');
  };

  return (
    <div className='activities-list-div'>
      <div className='filter-div'>
        <form onSubmit={handleSubmit}>
          <div className='input-div'>
            <label>Title:</label>
            <input
              type='search'
              id='search'
              name='title'
              onChange={handleChange}
              placeholder='Search title here...'
            />
          </div>
          <div className='input-div'>
            <label>From date:</label>
            <input
              type='date'
              id='startDate'
              name='startDate'
              onChange={handleChange}
            />
          </div>
          <div className='input-div'>
            <label>To date:</label>
            <input
              type='date'
              id='endDate'
              name='endDate'
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='info-button'>Search</button>
        </form>
      </div>
      <div className='activities-list'>
      </div>
    </div>
  );
};

export default ActivityList;
