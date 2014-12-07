import DS from 'ember-data';
var Task = DS.Model.extend({
  title: DS.attr('string'),
  added: DS.attr('date', {
    defaultValue: function () {
      return new Date();
    }
  }),
  duration: DS.attr('number', {
    defaultValue: 0
  }),
  submitted: DS.attr('boolean', {
    defaultValue: 0
  }),
  project: DS.belongsTo('project')
});
Task.reopenClass({
  FIXTURES: [{
    id: 1,
    title: 'The Clock',
    added: new Date(),
    project: 1
  }, {
    id: 2,
    title: 'The Quick',
    added: new Date(),
    project: 1
  }, {
    id: 3,
    title: 'The Brown',
    added: new Date(),
    project: 1
  }, {
    id: 4,
    title: 'Fox without The',
    added: new Date(),
    project: 2
  }, {
    id: 5,
    title: 'I think jumped',
    added: new Date(),
    project: 2
  }, {
    id: 6,
    title: 'Over',
    added: new Date(),
    project: 3
  }, {
    id: 7,
    title: 'The Fence',
    added: new Date(),
    project: 4
  }, {
    id: 8,
    title: 'Gumball',
    added: new Date(),
    projects: 4
  }, {
    id: 9,
    title: 'Must Watch',
    added: new Date(),
    project: 5
  }, {
    id: 10,
    title: 'Soon',
    added: new Date(),
    project: 6
  }]
});
export default Task;
