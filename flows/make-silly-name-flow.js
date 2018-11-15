var probable = require('probable');
var nameStems = require('../name-stems');
var renderMessage = require('../dom/render-message');

function makeSillyNameFlow() {
  var sillyName = getSillyName();

  renderMessage({ targetId: 'silly-name-field', message: sillyName.name });
  renderMessage({
    targetId: 'explanation-field',
    message: sillyName.explanation
  });
}

function getSillyName() {
  var prefix = probable.pickFromArray(nameStems.prefixes);
  var suffix = probable.pickFromArray(nameStems.suffixes);
  return {
    name: prefix.stem + suffix.stem,
    explanation: `${prefix.origin} + ${suffix.origin}`
  };
}

module.exports = makeSillyNameFlow;
