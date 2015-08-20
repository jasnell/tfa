##### Signed by https://keybase.io/jasnell
```
-----BEGIN PGP SIGNATURE-----
Comment: GPGTools - https://gpgtools.org

iQEcBAABCgAGBQJV1XqlAAoJEHNBsVwHCHesEMQH/2plQ/c3s9ZxajwXVvgjt6rC
ZNVsJ0DzDe2icyaJowaKLmPDXPkg+SiXuj3Xzx5GCp0LlIvTmapyyfQGMedjxtjc
ODAJ16lnyMwE7EbjommLZZjd/1B6XgvQFtGN2E1DRCiLFzN4teBQwZqO7Asxy66A
Cu6YxigV74Ex/dzeHDddRlGw2kkhkvpvo0FV8Yx3pwSrqL57VHSZ6pnXHfZCRsdt
lMB5zxIv1l/lvinaWEkSGVLlWNxs8ICCflvIHrsOzRbfBZs0oixT3ILQ1UIdNavN
dP2Je5xU9/DZXpkk4MP3U1/W+nhl6Uhjmd7wKZjGtrCH4ceI6PQoYG3gcd7DK0o=
=ZQ2Q
-----END PGP SIGNATURE-----

```

<!-- END SIGNATURES -->

### Begin signed statement 

#### Expect

```
size   exec  file            contents                                                        
             ./                                                                              
24             .gitignore    8913223070a84fabc094e967eec6c7735bbdab7bd09d192c0cf55b92682ff18d
11             .npmignore    cdce3a083bdbec6c71285b5447f266ca911d72eb77606fc8e29d45587ef6c2dd
1269   x       app.js        82f855b54aab978cc71727ec3cd61d672e7d014aac8e293545e310aa05384005
1193           enroll.js     350f7d9e05e9ec819e1b0be497826847ad6490f492e68fd897a7cd3c9ac2c471
1274           generate.js   320bf09330671b30aad770c773e9223f13616bf37d10da979c2c6b3571fc1dea
11310          LICENSE       30a2c00ed23f06add36f69a8fbdd8c946380b76dba24deaf9101e45123ab5b9f
767            package.json  afa5fdd00c25a994fdf936db12299b0d635b70c2889171b3ca721dd002f65a45
1597           qrenroll.js   2d05bf0107cc453b8b76716bf14a47a05dcd5b650c78dbdb0ceaf5aef0f2d59a
2087           README.md     6ae2db7c6506713a0fba2e8f73d57b65171ece9076f65d06f9a68afb66778bcd
```

#### Ignore

```
/SIGNED.md
```

#### Presets

```
git      # ignore .git and anything as described by .gitignore files
dropbox  # ignore .dropbox-cache and other Dropbox-related files    
kb       # ignore anything as described by .kbignore files          
```

<!-- summarize version = 0.0.9 -->

### End signed statement

<hr>

#### Notes

With keybase you can sign any directory's contents, whether it's a git repo,
source code distribution, or a personal documents folder. It aims to replace the drudgery of:

  1. comparing a zipped file to a detached statement
  2. downloading a public key
  3. confirming it is in fact the author's by reviewing public statements they've made, using it

All in one simple command:

```bash
keybase dir verify
```

There are lots of options, including assertions for automating your checks.

For more info, check out https://keybase.io/docs/command_line/code_signing