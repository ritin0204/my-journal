// timeUtils.js

/**
  *Function to get Greeting based on Time
  * @return {string}
*/
export function getGreeting() {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return 'Good Morning,';
  } else if (currentHour >= 12 && currentHour < 17) {
    return 'Good Afternoon,';
  } else {
    return 'Good Evening,';
  }
}

/**
 * Converts a 24-hour time string to the 12-hour format.
 * The input time string in the format 'HH:mm'.
 * @param {string} time24
 * The time string in 12-hour format, for example, 'hh:mm AM/PM'.
 * @return {string}
 *
 * @example
 * const time24 = '15:30';
 * const time12 = convertTo12HourFormat(time24);
 * console.log(time12); // Output: "3:30 PM"
 */
export function convertTo12HourFormat(time24) {
  // Parse the input time string
  const [hours, minutes] = time24.split(':').map(Number);

  // Determine AM or PM
  const period = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  const hours12 = hours % 12 || 12;

  // Format the result
  const time12 = `${hours12}:${minutes < 10 ? '0' : ''}${minutes} ${period}`;

  return time12;
}

/**
 * Converts an ISO date string to a human-readable date and time string.
 *
 * @param {string} isoDateString - The input ISO date string.
 * @return {string} A human-readable date and time string.
 *
 * @example
 * const isoDate = '2023-05-15T08:30:00';
 * const readableDate = convertToReadableDate(isoDate);
 * console.log(readableDate);
 * // Output: "May 15, 2023 08:30 AM"
 */
export function convertToReadableDate(isoDateString) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const date = new Date(isoDateString);
  const readableDate = date.toLocaleString('en-US', options);

  return readableDate;
}
