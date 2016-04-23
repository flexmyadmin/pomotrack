import Ember from "ember";
import CONST from '../../../../constants/log_entry'

export default Ember.Controller.extend({
  actions: {
    addLogEntry(duration, addedAt, task) {
      let logEntry = this.store.createRecord('log-entry', {
        duration: duration * 1000,
        status: CONST.STATUS_STOPPED,
        addedAt: addedAt && addedAt.length > 0 ? new Date(addedAt) : false || new Date(),
        task: task
      });
      logEntry.save()
        .then(() => task.get('logEntries'))
        .then((logEntries) => {
          logEntries.pushObject(logEntry);
          task.save();
        })
        .then(() => {
          this.set('newLogEntryDuration', '');
          this.set('newLogEntryDate', '');
        });
    }
  }
});
