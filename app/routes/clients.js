import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('client');
  },
  renderTemplate: function() {
    this.render('clients');
    this.render('selected', {
      outlet: 'selected',
    });
    this.render('clock', {
      outlet: 'clock',
      controller: 'clock'
    });
  }
});
