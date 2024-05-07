module.exports = {
  packagerConfig: { /* ... */ },
  rebuildConfig: { /* ... */ },
  makers: [
        {
          "name": "@electron-forge/maker-zip"
        },
        {
          name: '@electron-forge/maker-squirrel'/* ,
          config: {
            certificateFile: './cert.pfx',
            certificatePassword: process.env.CERTIFICATE_PASSWORD
          } */
        }],
  publishers: [],
  plugins: [],
  hooks: { /* ... */ },
  buildIdentifier: 'my-build'
};