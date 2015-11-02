export function initialize(container, application) {
  application.inject('route', 'selected', 'service:selected');
  application.inject('controller', 'selected', 'service:selected');
  //application.inject('service:selected', 'store', 'service:store');
  //application.inject('route', 'store', 'service:store');
}

export default {
  name: 'selected-service',
  initialize: initialize
};
