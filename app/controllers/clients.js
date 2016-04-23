import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    addClient(name) {
      this.store.createRecord('client', {
        name: name
      }).save()
        .then(() => this.set('newClientName', ''));
    }
  }
});

