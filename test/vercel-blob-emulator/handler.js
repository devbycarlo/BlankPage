// Test-only Lambda handler that applies the undici fetch patch before the real
// handler loads the Vercel Blob SDK. Used as the CMD for the blob-test image.
require('./undici-patch.js');

const { handler: _handler } = require('serverlesswp/wordpress');

exports.handler = async function (event, context) {
  return _handler(event);
};
