const { contextBridge, ipcRenderer } = require('electron')

const t = 2

contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title) => ipcRenderer.send('test', title),
  haha: t
})

