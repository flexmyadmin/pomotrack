import Ember from "ember";

export default Ember.ObjectController.extend({
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

    this.set('activeEntry', this.store.createLogEntry(this.get('model')));
  },

  stop: function() {
    var entry = this.get('activeEntry');
    if (!entry) return;

    entry.stop();

    this.set('activeEntry', null);
  }

});
