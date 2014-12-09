export function initialize(container, application) {
  application.inject('route', 'logEntryManagerService', 'service:log-entry-manager');
  application.inject('controller', 'logEntryManagerService', 'service:log-entry-manager');
}

export default {
  name: 'log-entry-manager-service',
  initialize: initialize
};
