import DS from 'ember-data';
import Ember from 'ember';
var Task = DS.Model.extend({
  title: DS.attr('string'),
  submitted: DS.attr('boolean', {
    defaultValue: 0
  }),
  project: DS.belongsTo('project'),
  logEntries: DS.hasMany('log-entry', {
    async: true
  }),
  duration: Ember.computed('logEntries.@each.duration', function () {
    return this.get('logEntries').reduce((sum, entry) => sum + entry.get('duration'), 0);
  })
});
Task.reopenClass({
  FIXTURES: [{
    id: 1,
    title: 'The Clock',
    project: 1,
    logEntries: [1, 2]
  }, {
    id: 2,
    title: 'The Quick',
    project: 1,
    logEntries: [4]
  }, {
    id: 3,
    title: 'The Brown',
    project: 1,
    logEntries: [5]
  }, {
    id: 4,
    title: 'Fox without The',
    project: 2,
    logEntries: [6]
  }, {
    id: 5,
    title: 'I think jumped',
    project: 2,
    logEntries: [7]
  }, {
    id: 6,
    title: 'Over',
    project: 3,
    logEntries: [8]
  }, {
    id: 7,
    title: 'The Fence',
    project: 4,
    logEntries: [9]
  }, {
    id: 8,
    title: 'Gumball',
    projects: 4,
    logEntries: [10]
  }, {
    id: 9,
    title: 'Must Watch',
    project: 5,
    logEntries: []
  }, {
    id: 10,
    title: 'Soon',
    project: 6,
    logEntries: []
  }]
});
export default Task;
