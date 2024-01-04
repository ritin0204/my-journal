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
