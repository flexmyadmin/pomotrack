import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    addTask(name, project) {
      let task = this.store.createRecord('task', {
        title: name,
        project: project
      });
      task.save()
        .then(() => project.get('tasks'))
        .then((tasks) => {
          tasks.pushObject(task);
          project.save();
        })
        .then(() => this.set('newTaskName', ''));
    }
  }
});
