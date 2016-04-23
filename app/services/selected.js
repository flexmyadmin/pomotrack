import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service('store'),
  task: null,
  logEntry: null,
  createLogEntry: function (task) {
    let logEntry = this.get('store').createRecord('log-entry', {
      task: task,
      addedAt: new Date()
    });
    logEntry.save()
      .then(() => task.save())
      .then(() => this.setLogEntry(logEntry));
    return logEntry;
  },
  setTask: function (task) {
    this.set('task', task);
  },
  setLogEntry: function (logEntry) {
    let activeLogEntry = this.get('logEntry');
    if (activeLogEntry) {
      activeLogEntry.stop();
    }
    this.set('logEntry', logEntry);
  },
  startLogEntry: function () {
    let task = this.get('task');
    if (!task) {
      throw new Error('No task selected to start log entry on');
    }
    this.createLogEntry(task);
  },
  stopLogEntry: function () {
    let logEntry = this.get('logEntry');
    if (!logEntry) {
      throw new Error('No logEntry to stop');
    }

    logEntry.stop();
    logEntry.save().then(() => this.setLogEntry(null));
  }
});
