#!/usr/bin/env node
'use strict';
const app = require('commander');
const qrenroll = require('./qrenroll');
const enroll = require('./enroll');
const generate = require('./generate');

app.version('2.1.0');

if (qrenroll.has_jsqrcode) {
  app.command('enroll-qrcode <qrcode>')
     .alias('enq')
     .description('enroll using a qrcode file')
     .option('-l, --label <label>', 'the label')
     .action(qrenroll);
}

app.command('enroll')
   .alias('en')
   .description('enroll')
   .option('-s, --secret <secret>', 'the secret')
   .option('-l, --label <label>', 'the label')
   .option('-a, --algorithm <algorithm>', 'sha1, sha256, sha512')
   .option('-e, --encoding <encoding>', 'ascii, hex, base32, base64')
   .option('-d, --digits <digits>', 'number of digits', parseInt)
   .option('-i, --issuer <issuer>', 'issuer')
   .action(enroll);

app.command('generate')
   .arguments('[label]')
   .alias('gen')
   .option('-n, --nolabel', 'do not print the label')
   .description('generate')
   .action(generate);

app.command('list')
   .alias('l')
   .description('list')
   .action(generate.list);

app.command('delete')
   .alias('d')
   .arguments('<label>')
   .description('delete')
   .action(generate.delete);

app.parse(process.argv);

if (!process.argv.slice(2).length) {
  generate(null, true)
}
