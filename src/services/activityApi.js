import baseApi from './baseApi';

async function createActivity(activityData) {
  const response = await baseApi.post('/activity/', activityData);
  if (response.status === 201) {
    return response.data;
  } else {
    throw new Error(response.status + ' ' + response.statusText);
  }
}

async function getActivitybyId(activityId) {
  const response = await baseApi.get(`/activity/${activityId}`);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.status + ' ' + response.statusText);
  }
}


async function updateActivity(activityId, activityData) {
  const response = await baseApi.put(`/activity/${activityId}`, activityData);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.status + ' ' + response.statusText);
  }
}

async function deleteActivity(activityId) {
  const response = await baseApi.delete(`/activity/${activityId}`);
  if (response.status === 204) {
    return response;
  } else {
    throw new Error(response.status + ' ' + response.statusText);
  }
}

export {
  createActivity,
  getActivitybyId,
  updateActivity,
  deleteActivity
};
