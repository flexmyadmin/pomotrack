import DS from 'ember-data';

var CONST = {
  STATUS_STARTED: 'started',
  STATUS_STOPPED: 'stopped'
};

var LogEntry = DS.Model.extend({
  addedAt: DS.attr('date', {
    defaultValue: function () {
      return new Date();
    }
  }),
  duration: DS.attr('number', {
    defaultValue: 0
  }),
  status: DS.attr('string', {
    defaultValue: CONST.STATUS_STARTED
  }),
  task: DS.belongsTo('task'),
  stop: function() {
    if (this.get('isStopped')) {
      return;
    }
    this.set('duration', new Date() - this.get('addedAt'));
    this.set('status', CONST.STATUS_STOPPED);
  },
  isStarted: function() {
    return this.get('status') === CONST.STATUS_STARTED;
  }.property('status'),
  isStopped: function() {
    return this.get('status') === CONST.STATUS_STOPPED;
  }.property('status')
});

LogEntry.reopenClass({
  FIXTURES: [{
    id: 1,
    addedAt: new Date(2014, 11, 8, 10, 20),
    status: CONST.STATUS_STOPPED,
    task: 1
  }, {
    id: 2,
    addedAt: new Date(),
    status: CONST.STATUS_STOPPED,
    task: 1
  }, {
    id: 3,
    addedAt: new Date(),
    status: CONST.STATUS_STOPPED,
    task: 1
  }, {
    id: 4,
    addedAt: new Date(),
    status: CONST.STATUS_STOPPED,
    task: 2
  }, {
    id: 5,
    addedAt: new Date(),
    status: CONST.STATUS_STOPPED,
    task: 3
  }, {
    id: 6,
    addedAt: new Date(),
    status: CONST.STATUS_STOPPED,
    task: 4
  }, {
    id: 7,
    addedAt: new Date(),
    status: CONST.STATUS_STOPPED,
    task: 5
  }, {
    id: 8,
    addedAt: new Date(),
    status: CONST.STATUS_STOPPED,
    task: 6
  }, {
    id: 9,
    addedAt: new Date(),
    status: CONST.STATUS_STOPPED,
    task: 7
  }, {
    id: 10,
    addedAt: new Date(),
    status: CONST.STATUS_STOPPED,
    task: 8
  }]
});

export default LogEntry;
