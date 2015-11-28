import {
  timeFormat
  } from 'pomotrack/helpers/time-format';
import { module, test } from 'qunit';

module('TimeFormatHelper');

var SECONDS_PER_HOUR = 3600, SECONDS_PER_MINUTE = 60;

function getMilliseconds(hours, minutes, seconds) {
  return (hours * SECONDS_PER_HOUR + minutes * SECONDS_PER_MINUTE + seconds) * 1000;
}

test('it transforms correctly most values', function (assert) {
  assert.equal(timeFormat(getMilliseconds(0, 0, 2)), '00:00:02');
  assert.equal(timeFormat(getMilliseconds(0, 1, 3)), '00:01:03');
  assert.equal(timeFormat(getMilliseconds(1, 9, 8)), '01:09:08');
  assert.equal(timeFormat(getMilliseconds(121, 11, 18)), '121:11:18');
});

test('it transforms correctly negative values', function (assert) {
  assert.equal(timeFormat(-1), '-00:00:01');
  assert.equal(timeFormat(getMilliseconds(0, -1, -3)), '-00:01:03');
});
