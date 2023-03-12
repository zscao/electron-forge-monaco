
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('testAPI', {
  sayHello: () => {
    console.log('Hello, testApi!')
  }
})