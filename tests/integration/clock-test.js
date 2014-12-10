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

var selectFirstTask = function(){
  find('.clients li a:eq(0)').click();
  find('.projects li a:eq(0)').click();
  find('.tasks li a:eq(0)').click();
};

test('The clock should be disabled', function() {
  visit('/').then(function() {
    equal(find('.clock button').hasClass('disabled'), true);
  });
});
test('The clock should be enabled after selecting first task', function() {
  find('.clients li a:first').click();
  find('.projects li a:first').click();
  find('.tasks li a:first').click();
  equal(find('.clock button').hasClass('disabled'), false);
});
test('Start should be disabled after it was clicked', function() {
  find('.clock .start').click();
  equal(find('.clock .start').hasClass('disabled'), true);
});
test('Stop should be enabled after log entry was started', function() {
  equal(find('.clock .stop').hasClass('disabled'), false);
});
test('Stop should be disabled after log entry was stopped', function() {
  find('.clock .stop').click();
  equal(find('.clock .stop').hasClass('disabled'), true);
});

