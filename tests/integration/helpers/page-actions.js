import SELECTORS from '../../../tests/integration/constants/selectors';

var helpers = {};

helpers.visitFirstTask = function(){
  return visit('/').then(function() {
    return click(SELECTORS.FIRST_CLIENT);
  }).then(function(){
    return click(SELECTORS.FIRST_PROJECT);
  }).then(function(){
    return click(SELECTORS.FIRST_TASK);
  });
};

helpers.clickStart = function() {
  return click(SELECTORS.CLOCK_START_BUTTON);
};
helpers.clickStop = function() {
  return click(SELECTORS.CLOCK_STOP_BUTTON);
};
helpers.findStart = function() {
  return find(SELECTORS.CLOCK_START_BUTTON);
};
helpers.findStop = function() {
  return find(SELECTORS.CLOCK_STOP_BUTTON);
};

export default helpers;
