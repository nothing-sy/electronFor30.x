const { contextBridge, ipcRenderer,app } = require('electron')


contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title) => ipcRenderer.send('test', title),
  version: () => app.getVersion(), // 不生效，因为app是主进程模块，所以无法使用并报错
  getVersion: async () => {
    const version = await ipcRenderer.invoke('version')
    return version
  },
  update(){
    ipcRenderer.send('update')
  }
})

