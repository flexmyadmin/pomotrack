import startApp from '../../tests/helpers/start-app';
import Ember from 'ember';

var App;

module('Integration - Landing Page', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

var visitFirstTask = function(){
  return visit('/').then(function() {
    return click('.clients li a:first');
  }).then(function(){
    return click('.projects li a:first');
  }).then(function(){
    return click('.tasks li a:first');
  });
};

var clickStart = function() {
  return click('.clock .start');
};
var clickStop = function() {
  return click('.clock .stop');
};

test('The clock should be disabled', function() {
  visit('/')
    .then(function() {
      equal(find('.clock button').hasClass('disabled'), true);
    });
});
test('The clock should be enabled after selecting first task', function() {
  visitFirstTask()
    .then(function(){
      equal(find('.clock .start').hasClass('disabled'), false);
    });
});
test('Start should be disabled after it was clicked', function() {
  visitFirstTask()
    .then(clickStart)
    .then(function(){
      equal(find('.clock .start').hasClass('disabled'), true);
    });
});
test('Stop should be enabled after log entry was started', function() {
  visitFirstTask()
    .then(clickStart)
    .then(function(){
      equal(find('.clock .stop').hasClass('disabled'), false);
    });
});
test('Stop should be disabled after log entry was stopped', function() {
  visitFirstTask()
    .then(clickStart)
    .then(clickStop)
    .then(function(){
      equal(find('.clock .stop').hasClass('disabled'), true);
    });
});

