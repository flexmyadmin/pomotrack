import DS from 'ember-data';

var LogEntry = DS.Model.extend({
  added: DS.attr('date', {
    defaultValue: function () {
      return new Date();
    }
  }),
  duration: DS.attr('number', {
    defaultValue: 0
  }),
  task: DS.belongsTo('task'),
  stop: function() {
    if (this.duration) {
      return;
    }

    this.set('duration', new Date() - this.get('added'));
  }
});

LogEntry.reopenClass({
  FIXTURES: [{
    id: 1,
    added: new Date(2014, 11, 8, 10, 20),
    task: 1
  }, {
    id: 2,
    added: new Date(),
    task: 1
  }, {
    id: 3,
    added: new Date(),
    task: 1
  }, {
    id: 4,
    added: new Date(),
    task: 2
  }, {
    id: 5,
    added: new Date(),
    task: 3
  }, {
    id: 6,
    added: new Date(),
    task: 4
  }, {
    id: 7,
    added: new Date(),
    task: 5
  }, {
    id: 8,
    added: new Date(),
    task: 6
  }, {
    id: 9,
    added: new Date(),
    task: 7
  }, {
    id: 10,
    added: new Date(),
    task: 8
  }]
});

export default LogEntry;
