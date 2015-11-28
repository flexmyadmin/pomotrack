import startApp from '../../tests/helpers/start-app';
import Ember from 'ember';
import pageActions from '../../tests/integration/helpers/page-actions';
import { test, module } from 'qunit';

var App;

module('Integration - Clock', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('The clock should be disabled', function(assert) {
  visit('/')
    .then(function() {
      assert.equal(pageActions.findStart().hasClass('disabled'), true);
    });
});
test('The clock should be enabled after selecting first task', function(assert) {
  pageActions.visitFirstTask()
    .then(function(){
      assert.equal(pageActions.findStart().hasClass('disabled'), false);
    });
});
test('Start should be disabled after it was clicked', function(assert) {
  pageActions.visitFirstTask()
    .then(pageActions.clickStart)
    .then(function(){
      assert.equal(pageActions.findStart().hasClass('disabled'), true);
    });
});
test('Stop should be enabled after log entry was started', function(assert) {
  pageActions.visitFirstTask()
    .then(pageActions.clickStart)
    .then(function(){
      assert.equal(pageActions.findStop().hasClass('disabled'), false);
    });
});
test('Stop should be disabled after log entry was stopped', function(assert) {
  pageActions.visitFirstTask()
    .then(pageActions.clickStart)
    .then(pageActions.clickStop)
    .then(function(){
      assert.equal(pageActions.findStop().hasClass('disabled'), true);
    });
});

