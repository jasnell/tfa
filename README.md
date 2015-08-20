## A Two-Factor Auth Client

Tired of having to pull out your phone all the time to grab those 2fa codes?

Install: `npm install -g tfa`

### Getting Help

```
bash-3.2$ tfa

  Usage: tfa [options] [command]


  Commands:

    enroll-qrcode|enq [options] <qrcode>  enroll using a qrcode file
    enroll|en [options]                   enroll
    generate|gen [options] [label]        generate
    list|l                                list
    delete|d <label>                      delete

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

### Enroll

Most two factor auth services provide a QRCode for enrollment with applications
such as Google Authenticator on Android. When you're setting up 2fa, save the
QRCode locally. Then do:

 `tfa enq qrcode.png`

Where `qrcode.png` is the absolute or relative path to your saved QRCode file.

`tfa` will extract both the secret and a label from the QRCode. The label is
used to generate 2fa codes. Many times, however, the label included in the
QRCode is not very user friendly. You can set your own local label using the
`-l` option:

 `tfa enq -l foo qrcode.png`

If the qrcode enrollment isn't working for whatever reason, and you happen to
know the TOTP secret being used, you can enroll manually:

 `tfa enroll -s {thesecret} -l {label}`

### Listing and Generating

To see a listing of enrolled services, do:

 `tfa list`

This will print the list of labels out to the console.

To generate the current TOTP token for a label:

 `tfa gen {label}`  (e.g. `tfa gen foo`)

To generate the current TOTP tokens for all labels:

 `tfa gen`

### Cleaning up

To delete a secret:

 `tfa delete {label}` (e.g. `tfa delete foo`)

## Important note about dependencies

The QRCode scanning function depends on the canvas and jsqrcode modules from
npm. To use tfa with QRCodes, there are a few unfortunate prerequisite
installation steps you will need as documented here:

  https://github.com/Automattic/node-canvas/wiki/_pages

It's not fun, but once you're through it, it should just work.
