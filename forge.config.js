module.exports = {
  makers: [
        /* {
          "name": "@electron-forge/maker-zip"
        }, */
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
      draft: true,
      authToken: '' // 请填写你的github personal access token
    }
  }],
  buildIdentifier: 'my-build',
  hooks: {
    prePackage: async (forgeConfig, appProcess) => {
      console.log(`我在准备打包: ${appProcess}`);
    },
    preMake(){
      console.log(`preMake----------`);
    }
}
}