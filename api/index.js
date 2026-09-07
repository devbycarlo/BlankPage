const { handler: _handler } = require('serverlesswp/wordpress');

exports.handler = async function (event, context) {
  return _handler(event);
};
