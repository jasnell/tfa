'use strict';
const Configstore = require('configstore');
const pkg = require('./package.json');
const passcode = require('passcode');
const util = require('util');
const chalk = require('chalk');
const clipb = require('clipboardy');

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

  clipb.writeSync(token);

  if (!nolabel) {
    console.log(
      '\n',
      util.format(
        '%s: %s %s',
        chalk.cyan(label),
        chalk.bold.green(token),
        chalk.gray(' [copied to clipboard]')
      ),
      '\n'
    );
  } else {
    console.log(
      '\n',
      token,
      chalk.gray(' [copied to clipboard]'),
      '\n'
    );
  }
}

function generate(arg, options) {
  var nolabel = options.nolabel;
  if (arg) doGenerate(arg, nolabel);
  else {
    var keys = Object.keys(conf.all);
    for (var n = 0; n < keys.length; n++) {
      doGenerate(keys[n],nolabel);
    };
  }
}

generate.list = function(arg, options) {
  var keys = Object.keys(conf.all);
  for (var n = 0; n < keys.length; n++) {
    console.log(keys[n]);
  };
};

generate.delete = function(arg, options) {
  if (!arg) {
    console.error('no label provided');
    process.exit(-1);
  }
  conf.del(arg);
  console.log('deleted!');
};

module.exports = generate;
