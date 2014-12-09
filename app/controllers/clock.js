import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    start: function() {
      this.start();
    },
    stop: function() {
      this.stop();
    }
  },

  start: function() {
    this.get('selected').startLogEntry();
  },

  stop: function() {
    this.get('selected').stopLogEntry();
  },

  startEnabled: function() {
    var selectedLogEntry = this.get('selected.logEntry'),
      selectedTask = this.get('selected.task');

    if (!selectedTask) {
      //disable it if there's no selected task
      return false;
    }

    if (!selectedLogEntry || selectedLogEntry.get('isStopped')) {
      //always enabled if not currently logging anything
      return true;
    }

    //enable it when the user selects a different task than the current active entry's task
    return selectedLogEntry.get('task') !== selectedTask;
  }.property('selected.task', 'selected.logEntry'),
  stopEnabled: function() {
    var selectedTask = this.get('selected.task');

    return selectedTask && !this.get('startEnabled');
  }.property('selected.task', 'startEnabled')
});
