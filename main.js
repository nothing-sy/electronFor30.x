
const { app, BrowserWindow,ipcMain,autoUpdater } = require('electron')
const path = require('path')

// console.log(process.platform,process.arch)
// const { updateElectronApp } = require('update-electron-app');
// updateElectronApp()

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  })
  win.webContents.openDevTools()

  win.loadFile('index.html')
}


app.whenReady().then(() => {
  createWindow()
  console.log(`https://update.electronjs.org/nothing-sy/electronFor30.x/win32-x64/${app.getVersion()}`)
// 更新并下载应用
autoUpdater.setFeedURL({
  url: `https://update.electronjs.org/nothing-sy/electronFor30.x/win32-x64/${app.getVersion()}`
})

autoUpdater.on('update-downloaded', () => {
  // 更新完以后退出并安装
  autoUpdater.quitAndInstall()

})
autoUpdater.on('checking-for-update', () => {
  // 更新完以后退出并安装
  console.log('checking-for-update')

})
autoUpdater.on('update-available', () => {
  // 更新完以后退出并安装
  console.log('update-available')

})
autoUpdater.on('update-not-available', () => {
  // 更新完以后退出并安装
  console.log('update-not-available')

})


  ipcMain.on('test',(event, title) => {
    console.log(title) // prints "ping"
})



ipcMain.on('update', () => {


autoUpdater.checkForUpdates()

})

ipcMain.handle('version',() => {
  return `当前版本号：` + app.getVersion()
})



}
)

app.on('window-all-closed', () => {
  console.log('quit')
  app.quit()
})