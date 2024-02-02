import baseApi from './baseApi';
import Cookies from 'js-cookie';


/**
 * Function to get Access Token and Refreshe Token by credentials
 * @param {Object} credentials
 * @return {Promise<string | Error>}
 */
async function getTokens(credentials) {
  try {
    const response = await baseApi.post('/token/', credentials);
    if (response.status === 200) {
      const {refresh, access} = response.data;
      Cookies.set('_currentUsername', credentials.username);
      Cookies.set('accessToken', access);
      Cookies.set('refreshToken', refresh);
      return response.data;
    } else {
      throw new Error('Sommthing went wrong! ' + response.status);
    }
  } catch (error) {
    throw new Error(error.messege);
  }
}

/**
 * Function to get the access token using the refresh token
 * @param {string} refreshToken - refresh token
 * @return {Promise<void>}
 */
async function getAccessToken() {
  const refreshToken = Cookies.get('refreshToken');
  try {
    const response = await baseApi.post('/token/refresh/', {
      'refresh': refreshToken,
    });
    Cookies.set('accessToken', response.data['access']);
    return response.data['access'];
  } catch (error) {
    removeTokens();
    return null;
  }
}


/**
 * Removes the access and refresh tokens from local storage
 */
async function removeTokens() {
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
  Cookies.remove('_currentUsername');
}

export {getTokens, getAccessToken, removeTokens};
