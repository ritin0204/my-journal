import React, {useState} from 'react';
import PropTypes from 'prop-types';

const ActivityForm = ({setFormVisible}) => {
  const [error, setError] = useState('');
  // Think About using useForm using useState each time
  // It may be a better way to do things
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    start_time: '',
    end_time: '',
    category: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to Django backend
    console.log(formData);
    setError('Something missing...');
  };

  return (
    <div className='activity-form-div'>
      <button className='info-button'
        onClick={() => setFormVisible(false)}>
        Close
      </button>
      <form onSubmit={handleSubmit} className='card activity-form'>
        {error && <p className='error-text'>{error}</p>}
        <div className='input-div'>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className='input-div'>
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className='input-div'>
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div className='input-div'>
          <label>Start Time</label>
          <input
            type="time"
            name="start_time"
            value={formData.start_time}
            onChange={handleChange}
          />
        </div>

        <div className='input-div'>
          <label>End Time</label>
          <input
            type="time"
            name="end_time"
            value={formData.end_time}
            onChange={handleChange}
          />
        </div>

        <div className='input-div'>
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div className='action-div'>
          <button className='success-button'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

ActivityForm.propTypes = {
  setFormVisible: PropTypes.func,
};

export default ActivityForm;
