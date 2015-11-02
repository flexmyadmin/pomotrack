import Ember from 'ember';

export default Ember.Service.extend({
  //needs: ['store:main'],
  task: null,
  logEntry: null,
  setTask: function(task) {
    this.set('task', task);
  },
  setLogEntry: function(logEntry) {
    var activeLogEntry = this.get('logEntry');
    if (activeLogEntry) {
      activeLogEntry.stop();
    }

    this.set('logEntry', logEntry);
  },
  startLogEntry: function() {
    var task = this.get('task');
    if (!task) {
      throw new Error('No task selected to start log entry on');
    }

    this.setLogEntry(this.store.createLogEntry(task));
  },
  stopLogEntry: function() {
    var logEntry = this.get('logEntry');
    if (!logEntry) {
      throw new Error('No logEntry to stop');
    }

    logEntry.stop();
    this.setLogEntry(null);
  }
});
