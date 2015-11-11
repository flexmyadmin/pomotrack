import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.get('store').findRecord('task', params.task_id);
  },
  afterModel: function(task) {
    this.get('selected').setTask(task);
  },
  deactivate: function() {
    this.get('selected').setTask(null);
  }
});
