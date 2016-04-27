import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    start: function() {
      this.get('selected').startLogEntry();
    },
    stop: function() {
      this.get('selected').stopLogEntry();
    }
  },

  isStartButtonEnabled: function() {
    const selectedTask = this.get('selected.task');
    const selectedLogEntry = this.get('selected.logEntry');
    const selectedLogEntryStarted = selectedLogEntry && selectedLogEntry.isStarted;
    return selectedTask && !selectedLogEntryStarted;
  }.property('selected.task', 'selected.logEntry'),
  isStopButtonEnabled: function() {
    const selectedTask = this.get('selected.task');
    return selectedTask && !this.get('isStartButtonEnabled');
  }.property('selected.task', 'isStartButtonEnabled')
});
