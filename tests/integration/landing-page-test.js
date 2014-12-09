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

test('Should show the client menu option', function() {
  visit('/').then(function() {
    equal(find('ul li.active').text().indexOf('Clients'), 0);
  });
});

