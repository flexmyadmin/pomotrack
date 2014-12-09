import Ember from 'ember';

export default Ember.Route.extend({
  afterModel: function(task) {
    this.selected.setTask(task);
  },
  deactivate: function() {
    this.selected.setTask(null);
  }
});
