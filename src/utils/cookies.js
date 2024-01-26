// cookies.js

// Function to set an HTTP-only cookie
/**
 * Function to set an HTTP-only cookie
 * @param {string} name - the name of the cookie
 * @param {string} value - the value of the cookie
 * @param {number} expiresInMinutes
 * - the number of minutes until the cookie expires
 */
export function setCookie(name, value, expiresInMinutes) {
  const expires = new Date();
  expires.setDate(expires.getTime() + expiresInMinutes*60*1000);

  const cookieOptions = {
    path: '/',
    expires,
  };

  document.cookie = `${name}=${value}; ${Object.entries(cookieOptions)
      .map(([key, val]) => `${key}=${val}`)
      .join('; ')}`;
}

// Function to get the value of an HTTP-only cookie by name
/**
 * Function to get the value of an HTTP-only cookie by name
 * @param {string} name - the name of the cookie
 * @return {string|null} - the value of the cookie if found, otherwise null
 */
export function getCookie(name) {
  const cookies = document.cookie.split('; ');

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');

    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null; // Cookie not found
}
