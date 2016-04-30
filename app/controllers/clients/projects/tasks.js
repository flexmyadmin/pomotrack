import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    addTask(name, project) {
      return this.store.createRecord('task', {
        title: name,
        project: project
      }).save()
        .then(() => project.save());
    }
  }
});
