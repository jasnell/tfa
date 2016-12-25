'use strict';

function has_jsqrcode() {
  try {
    require('jsqrcode');
    require('canvas');
    return true;
  } catch (err) {
    return false;
  }
}
const has = has_jsqrcode();

if (has) {
  const Canvas = require('canvas');
  const Image = Canvas.Image;
  const qrcode = require('jsqrcode')(Canvas);
  const path = require('path');
  const url = require('url');
  const qs = require('querystring');
  const en = require('./enroll');
  const fs = require('fs');

  function enroll(arg, options) {
    var qr_path = path.resolve(process.cwd(), arg);
    if (!fs.existsSync(qr_path)) {
      console.error('cannot read QRCode image');
      process.exit(-1);
    }
    var image = new Image();
    image.onload = function() {
      var result;
      try{
        result = qrcode.decode(image);
        var parsed = url.parse(result);
        var label = options.label || (unescape(parsed.pathname.substr(1)));
        var query = qs.parse(parsed.query);
        var secret = query.secret;
        var opts = {};
        if (query.issuer) opts.issuer = query.issuer;
        en.enroll(label, secret, opts, function(err) {
          if (err) {
            console.error('unable to enroll');
            process.exit(-1);
          }
          console.log('enrolled!');
        });
      } catch(e) {
        console.error('unable to read qr code');
        process.exit(-1);
      }
    };
    image.src = qr_path;
  }

  module.exports = enroll;
} else {
  module.exports = function() {
    console.error(
      'qrcode scanning not supported. please install optional dependencies');
    process.exit(-1);
  };
}
module.exports.has_jsqrcode = has;
