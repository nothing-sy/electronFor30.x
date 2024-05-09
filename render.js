window.electronAPI.setTitle('测试')


async function getVersion(){
  document.getElementById('haha').innerHTML = await window.electronAPI.getVersion()
}

getVersion()

document.getElementById('btn').addEventListener('click', () => {
  window.electronAPI.update()
})
