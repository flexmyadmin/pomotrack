import Ember from 'ember';

var SECONDS_PER_HOUR = 3600,
  SECONDS_PER_MINUTE = 60;

function getTwoDigitsNumber(number) {
  if (number < 10) {
    return '0' + number;
  }
  return number;
}

function format(value, hasMiliseconds, displayMiliseconds) {
  var seconds = 0,
    minutes,
    hours,
    miliSeconds;
  displayMiliseconds = displayMiliseconds || false;
  value = parseInt(value, 10);
  if (isNaN(value)) {
    value = 0;
  }
  if (hasMiliseconds) {
    seconds = value / 1000;
    miliSeconds = value % 1000;
  } else {
    seconds = value;
    miliSeconds = false;
  }
  hours = Math.floor(seconds / SECONDS_PER_HOUR);
  seconds = seconds - SECONDS_PER_HOUR * hours;
  minutes = Math.floor(seconds / SECONDS_PER_MINUTE);
  seconds = seconds - minutes * SECONDS_PER_MINUTE;
  return sign + getTwoDigitsNumber(hours) + ':' +
  getTwoDigitsNumber(minutes) + ':' +
  getTwoDigitsNumber(seconds);
}

export function timeFormat(input) {
  return format(input, true, true);
}

export default Ember.Handlebars.makeBoundHelper(timeFormat);
