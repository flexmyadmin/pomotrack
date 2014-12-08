import Ember from "ember";

export default Ember.ObjectController.extend({
  hasActiveEntry: false,
  activeEntry: null,
  actions: {
    start: function() {
      this.start();
    },
    stop: function() {
      this.stop();
    }
  },

  start: function() {
    this.stop();

    var logEntry = this.store.createRecord('log-entry', {
      task: this.get('model')
    });
    this.get('logEntries').pushObject(logEntry);

    this.set('hasActiveEntry', true);
    this.set('activeEntry', logEntry);
  },

  stop: function() {
    var entry = this.get('activeEntry');
    if (!entry) return;

    entry.set('duration', new Date() - entry.get('added'));

    this.set('hasActiveEntry', false);
    this.set('activeEntry', null);
  }

});
