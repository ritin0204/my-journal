import baseApi from './baseApi';

async function createJournal(journalData) {
  const response = await baseApi.post(`/journal/`,journalData);
  if (response.status === 201) {
    return response.data;
  } else {
    throw new Error(response.status + ' ' + response.statusText);
  }
}


async function getJournalById(id=null) {
  const response = await baseApi.get(`/journals/${id}/`);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.status + ' ' + response.statusText);
  }
}


async function getJournalByDate(date=new Date()) {
  const response = await baseApi.get(`/journals/?date=${date.toISOString()}`);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.status + ' ' + response.statusText);
  }
}


async function updateJournal(journalId, journalData) {
  const response = await baseApi.put(`/journal/${journalId}/`, journalData);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.status + ' ' + response.statusText);
  }
}


async function deleteJournal(journalId) {
  const response = await baseApi.delete(`/journal/${journalId}/`);
  if (response.status === 204) {
    return response;
  } else {
  }
}


export {createJournal, getJournalByDate, getJournalById, updateJournal, deleteJournal};
