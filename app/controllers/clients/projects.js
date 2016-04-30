import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    addProject(name, client) {
      return this.store.createRecord('project', {
        title: name,
        client: client
      }).save()
        .then(() => client.save());
    }
  }
});
