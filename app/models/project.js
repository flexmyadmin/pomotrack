import DS from 'ember-data';
var Project = DS.Model.extend({
  title: DS.attr('string'),
  addedAt: DS.attr('date', {
    defaultValue: function () {
      return new Date();
    }
  }),
  active: DS.attr('boolean'),
  tasks: DS.hasMany('task', {
    async: true
  }),
  client: DS.belongsTo('client')
});
Project.reopenClass({
  FIXTURES: [{
    id: 1,
    title: 'Website',
    addedAt: new Date(),
    active: true,
    client: 1,
    tasks: [1, 2, 3]
  }, {
    id: 2,
    title: 'iOS Application',
    addedAt: new Date(),
    active: true,
    client: 1,
    tasks: [4, 5]
  }, {
    id: 3,
    title: 'Android Application',
    addedAt: new Date(),
    active: true,
    client: 1,
    tasks: [6]
  }, {
    id: 4,
    title: 'Fix XML',
    addedAt: new Date(),
    active: true,
    client: 2,
    tasks: [7, 8]
  }, {
    id: 5,
    title: 'Job Website',
    addedAt: new Date(),
    active: true,
    client: 2,
    tasks: [9]
  }, {
    id: 6,
    title: 'Winows Application',
    addedAt: new Date(),
    active: true,
    client: 2,
    tasks: [10]
  }]
});
export default Project;
