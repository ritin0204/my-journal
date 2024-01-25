import React, {useState} from 'react';
import ActivityForm from '../../components/form/ActivityForm';
import ActivityList from './ActivityList';

const Activities = () => {
  const [formVisible, setFormVisible] = useState(false);
  return (
    <div className='activity-div'>
      <h1>All Activities</h1>
      <div className='action-div'>
        <button className='success-button'
          onClick={() => setFormVisible(true)}>
          Add Activity
        </button>
      </div>
      {
        formVisible &&
        <ActivityForm
          setFormVisible={setFormVisible}
        />
      }
      <ActivityList />
    </div>
  );
};


export default Activities;
