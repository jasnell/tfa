const Configstore = require('configstore');
const pkg = require('./package.json');

const conf = new Configstore(pkg.name, {});

function doEnroll(label, secret, options, callback) {
  setImmediate(function() {
    options = options || {};
    try {
      var value = {secret:secret};
      Object.keys(options).forEach(function(key) {
        value[key] = options[key];
      });
      conf.set(label, value);
      callback();
    } catch (err) {
      callback(err);
    }
  });
}

function enroll(env, options) {
  if (!env.secret)
    console.log('cannot enroll without a secret');
  if (!env.label)
    console.log('cannot enroll without a label');
  var options = {};
  if (env.algorithm)
    options.algorithm = env.algorithm;
  if (env.encoding)
    options.encoding = env.encoding;
  var digits = parseInt(env.digits);
  if (digits)
    options.digits = parseInt(digits);
  if (env.issuer)
    options.issuer = env.issuer;
  doEnroll(env.label, env.secret, options, function(err) {
    if (err) {
      console.log('could not enroll');
      process.exit(1);
    }
    console.log('enrolled!');
    process.exit(0);
  });
}
module.exports = enroll;
module.exports.enroll = doEnroll;
