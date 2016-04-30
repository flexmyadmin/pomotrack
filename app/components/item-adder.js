import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    add(newValue, model) {
      this.get('onAdd')(newValue, model)
        .then(() => this.set('newValue', ''));
    }
  }
});
