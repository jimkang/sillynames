var handleError = require('handle-error-web');
var wireControls = require('./dom/wire-controls');
var makeSillyNameFlow = require('./flows/make-silly-name-flow');

(function go() {
  window.onerror = reportTopLevelError;
  wireControls({ makeSillyName: makeSillyNameFlow });
})();

function reportTopLevelError(msg, url, lineNo, columnNo, error) {
  handleError(error);
}
