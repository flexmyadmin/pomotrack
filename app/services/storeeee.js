import Ember from 'ember';

export default Ember.Service.extend({
    createLogEntry: function(task) {
        var logEntry = this.createRecord('log-entry', {
            task: task
        });
        task.get('logEntries').pushObject(logEntry);

        return logEntry;
    }
});
