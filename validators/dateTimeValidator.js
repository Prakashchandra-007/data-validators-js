// getCurrentDateTime(): This function returns the current date and time.
function getCurrentDateTime() {
  return new Date();
}

//   formatDate(date, format): This function formats a given date according to the specified format.
function formatDate(date, format) {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}
//   addDays(date, days): This function adds a specified number of days to a given date.
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

//   getWeekday(date): This function returns the weekday name for a given date.
function getWeekday(date) {
  const options = { weekday: "long" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

//   isLeapYear(year): This function checks if a given year is a leap year.
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
//   getDaysInMonth(year, month): This function returns the number of days in a given month of a given year.
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
//   getElapsedTime(startDate, endDate): This function calculates the elapsed time between two dates.
function getElapsedTime(startDate, endDate) {
  const diff = endDate.getTime() - startDate.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return {
    days: days,
    hours: hours % 24,
    minutes: minutes % 60,
    seconds: seconds % 60,
  };
}
module.exports = {
  getElapsedTime,
  getDaysInMonth,
  isLeapYear,
  getCurrentDateTime,
  formatDate,
  addDays,
  getWeekday,
};
