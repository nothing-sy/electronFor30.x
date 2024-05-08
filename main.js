const { app, BrowserWindow,ipcMain } = require('electron')
const path = require('path')


require('update-electron-app')()

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

  ipcMain.on('test',(event, title) => {
    console.log(title) // prints "ping"
})



}
)

app.on('window-all-closed', () => {
  console.log('quit')
  app.quit()
})