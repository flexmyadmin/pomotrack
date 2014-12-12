import DS from 'ember-data';

var Client = DS.Model.extend({
  name: DS.attr('string'),
  addedAt: DS.attr('date', {
    defaultValue: function () {
      return new Date();
    }
  }),
  projects: DS.hasMany('project', {
    async: true
  })
});
Client.reopenClass({
  FIXTURES: [{
    id: 1,
    name: 'Brad Pitt',
    addedAt: new Date(),
    projects: [1, 2, 3]
  }, {
    id: 2,
    name: 'Angelica Jolie',
    addedAt: new Date(),
    projects: [4, 5, 6]
  }]
});
export default Client;
