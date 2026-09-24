const {app,BrowserWindow,ipcMain} = require("electron");
const pathTool = require("path");
let electronWindow = null;
function createWindow() {
    electronWindow = new BrowserWindow({
        width: 1020,
        height: 600,
        title: "T-PageCode Phishing Check",
        frame: false,
        resizable: false,
        transparent: true,
        webPreferences: {
            preload: pathTool.join(__dirname,"preload.js"),
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: true,
        }
    })
    electronWindow.loadFile(pathTool.join(__dirname,"index.html"));
}
ipcMain.on("window-close",(e) => {
    app.quit();
})
ipcMain.on("window-min",() => {
    electronWindow.minimize();
})
app.whenReady().then(() => {
    createWindow();
});
app.on("window-all-closed",() => {
    app.quit();
})