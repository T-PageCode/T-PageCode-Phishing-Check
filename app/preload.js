const {contextBridge,ipcRenderer} = require("electron");
contextBridge.exposeInMainWorld("electronWindow",{
    closeWindow:() => ipcRenderer.send("window-close"),
    minWindow:() => ipcRenderer.send("window-min")
});