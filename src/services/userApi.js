import {getTokens} from './authApis';
import baseApi from './baseApi';


/**
 * Gets the user data for the given username.
 * @param {string} username - The username of the user.
 * @return {object} The user data.
 */
async function getUser(username) {
  const response = await baseApi.get(`/users/${username}/`);
  if (response.status === 200) {
    console.log(response.data);
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
}


/**
 * Creates a new user in the system.
 * @param {object} userdata - The user data to create.
 * @param {string} userdata.username - The user's name.
 * @param {string} userdata.email - The user's email address.
 * @param {string} userdata.password - The user's password.
 * @return {object} The response from the server.
 */
async function createUser(userdata) {
  const response = await baseApi.post('/users/', userdata);
  if (response.status === 201) {
    await getTokens(userdata);
    return response;
  } else {
    throw new Error(response.statusText);
  }
}


/**
 * Updates an existing user in the system.
 * @param {object} userData - The user data to update.
 * @param {string} userData.username - The user's name.
 * @param {string} [userData.email] - The user's email address.
 * @param {string} [userData.password] - The user's password.
 * @return {object} The response from the server.
 */
async function updateUser(userData) {
  try {
    const response = await baseApi.put(
        `/users/${userData.username}/`,
        userData);
    if (response.status === 200) {
      return response;
    } else {
      throw new Error(response.statusText);
    }
  } catch (err) {
    throw new Error(response.statusText);
  }
}


/**
 * Deletes a user from the system.
 * @param {string} username - The username of the user to delete.
 * @return {object} The response from the server.
 */
async function deleteUser(username=null) {
  const response = await baseApi.delete(`/users/${username}/`);
  if (response.status === 204) {
    return response;
  } else {
    throw new Error(response.statusText);
  }
}


export {getUser, createUser, updateUser, deleteUser};
