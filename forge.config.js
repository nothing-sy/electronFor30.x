module.exports = {
  packagerConfig: { /* ... */ },
  rebuildConfig: { /* ... */ },
  makers: [
        {
          "name": "@electron-forge/maker-zip"
        },/*  */
        {
          name: '@electron-forge/maker-squirrel'/* ,
          config: {
            certificateFile: './cert.pfx',
            certificatePassword: process.env.CERTIFICATE_PASSWORD
          } */
        }],
  publishers: [ {
    name: '@electron-forge/publisher-github',
    config: {
      repository: {
        owner: 'nothing-sy',
        name: 'electronFor30.x'
      },
      prerelease: false,
      draft: true
    }
  }],
  plugins: [],
  hooks: { /* ... */ },
  buildIdentifier: 'my-build'
};