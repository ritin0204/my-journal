import baseApi from './baseApi';
import {setCookie} from '../utils/cookies';

const ACCESS_TOKEN_TIMEOUT = 5; // Minutes
const REFRESH_TOKEN_TIMEOUT = 360; // Minutes


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
      setCookie('access_token', access, ACCESS_TOKEN_TIMEOUT);
      setCookie('refresh_token', refresh, REFRESH_TOKEN_TIMEOUT);
      return response.data;
    } else {
      throw new Error('Sommthing went wrong! ' + response.status);
    }
  } catch (error) {
    throw new Error('Invalid username or password!');
  }
}


/**
 * Function to get the access token using the refresh token
 * @param {string} refreshToken - refresh token
 * @return {Promise<void>}
 */
async function getAccessToken(refreshToken) {
  try {
    const response =await baseApi.post('/token/refresh/', {
      'refresh': refreshToken,
    });
    setCookie(
        'access_token',
        response.data['access'],
        ACCESS_TOKEN_TIMEOUT,
    );
  } catch (error) {
    console.log(error);
  }
}


/**
 * Removes the access and refresh tokens from local storage
 */
async function removeTokens() {
  setCookie('access_token', '', -1);
  setCookie('refresh_token', '', -1);
}

export {getTokens, getAccessToken, removeTokens};
