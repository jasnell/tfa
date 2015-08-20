const Configstore = require('configstore');
const pkg = require('./package.json');
const passcode = require('passcode');
const util = require('util');
const chalk = require('chalk');

const conf = new Configstore(pkg.name, {})

function doGenerate(label, nolabel) {
  var value = conf.get(label);
  var secret = value.secret;
  var token = passcode.totp({
    secret: secret,
    encoding: value.encoding || 'base32',
    digits: value.digits || 6,
    algorithm: value.algorithm || 'sha1',
    step: value.step || 30
  });
  if (!nolabel) {
    console.log(util.format(
      '%s : %s',
      chalk.cyan(label),
      chalk.bold.green(token)));
  } else {
    console.log(token);
  }
}

function generate(arg, options) {
  var nolabel = options.nolabel;
  if (arg) doGenerate(arg, nolabel);
  else {
    Object.keys(conf.all).forEach(function(item) {
      doGenerate(item,nolabel);
    });
  }
  process.exit(0);
}

generate.list = function(arg, options) {
  Object.keys(conf.all).forEach(function(item) {
    console.log(item);
  });
  process.exit(0);
};

generate.delete = function(arg, options) {
  if (!arg) {
    console.log('no label provided');
    process.exit(1);
  }
  conf.del(arg);
  console.log('deleted!');
  process.exit(0);
};

module.exports = generate;
