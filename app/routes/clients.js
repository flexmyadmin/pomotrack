import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.get('store').findAll('client');
  },
  renderTemplate: function() {
    this.render('clients');

    this.render('clock', {
      outlet: 'clock',
      controller: 'clock'
    });
  }
});
