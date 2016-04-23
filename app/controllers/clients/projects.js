import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    addProject(name, client) {
      var project = this.store.createRecord('project', {
        title: name,
        client: client
      }).save()
        .then(() => client.get('projects'))
        .then((projects) => {
          //console.log(projects);
          //projects.pushObject(project);
          client.save();
        })
        .then(() => this.set('newProjectName', ''));
    }
  }
});