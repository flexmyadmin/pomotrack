import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    addClient(name) {
      return this.store.createRecord('client', {
        name: name
      }).save();
    }
  }
});

