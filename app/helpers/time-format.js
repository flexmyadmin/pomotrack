import Ember from 'ember';

var SECONDS_PER_HOUR = 3600,
  SECONDS_PER_MINUTE = 60;

function formatInteger(value, leadingZeros) {
  var str;
  value = parseInt(value, 10);
  str = value;
  if (leadingZeros > 0) {
    if (value < Math.pow(10, leadingZeros)) {
      value = '' + value;
      str = new Array(leadingZeros + 1 - value.length);
      str = str.join('0') + value;
    }
  }
  return str;
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
  return formatInteger(hours, 2) + ':' +
  formatInteger(minutes, 2) + ':' +
  formatInteger(seconds, 2) +
  (displayMiliseconds === false ? "" : "." + formatInteger(miliSeconds, 3));
}

export function timeFormat(input) {
  return format(input, true, true);
}

export default Ember.Handlebars.makeBoundHelper(timeFormat);
