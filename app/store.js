import DS from 'ember-data';

export default DS.Store.extend({
  createLogEntry: function(task) {
    var logEntry = this.createRecord('log-entry', {
      task: task
    });
    task.get('logEntries').pushObject(logEntry);

    return logEntry;
  }
});
