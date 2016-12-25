'use strict';
const Configstore = require('configstore');
const pkg = require('./package.json');

const conf = new Configstore(pkg.name, {});

function doEnroll(label, secret, options) {
  options = options || {};
  if (typeof options !== 'object')
    throw new TypeError('options must be an object');

  var value = {secret:secret};
  var keys = Object.keys(options);
  for (var n = 0; n < keys.length; n++) {
    value[keys[n]] = options[key];
  }
  conf.set(label, value);
}

function enroll(env, options) {
  if (!env.secret) {
    console.error('cannot enroll without a secret');
    process.exit(-1);
  }
  if (!env.label) {
    console.error('cannot enroll without a label');
    process.exit(-1);
  }
  var options = {};
  if (env.algorithm)
    options.algorithm = env.algorithm;
  if (env.encoding)
    options.encoding = env.encoding;
  var digits = env.digits | 0;
  if (digits)
    options.digits = digits;
  if (env.issuer)
    options.issuer = env.issuer;
  doEnroll(env.label, env.secret, options);
}
module.exports = enroll;
module.exports.enroll = doEnroll;
