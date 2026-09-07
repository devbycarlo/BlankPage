const { handler: _handler } = require('serverlesswp/wordpress');

const handler = async function (event, context) {
  return _handler(event);
};

module.exports = handler;
module.exports.handler = handler;
