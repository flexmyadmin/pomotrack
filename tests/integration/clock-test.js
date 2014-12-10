import startApp from '../../tests/pageActions/start-app';
import Ember from 'ember';
import pageActions from '../../tests/integration/pageActions/page-actions';

var App;

module('Integration - Clock', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('The clock should be disabled', function() {
  visit('/')
    .then(function() {
      equal(find('.clock button').hasClass('disabled'), true);
    });
});
test('The clock should be enabled after selecting first task', function() {
  pageActions.visitFirstTask()
    .then(function(){
      equal(pageActions.findStart().hasClass('disabled'), false);
    });
});
test('Start should be disabled after it was clicked', function() {
  pageActions.visitFirstTask()
    .then(pageActions.clickStart)
    .then(function(){
      equal(pageActions.findStart().hasClass('disabled'), true);
    });
});
test('Stop should be enabled after log entry was started', function() {
  pageActions.visitFirstTask()
    .then(pageActions.clickStart)
    .then(function(){
      equal(pageActions.findStop().hasClass('disabled'), false);
    });
});
test('Stop should be disabled after log entry was stopped', function() {
  pageActions.visitFirstTask()
    .then(pageActions.clickStart)
    .then(pageActions.clickStop)
    .then(function(){
      equal(pageActions.findStop().hasClass('disabled'), true);
    });
});

