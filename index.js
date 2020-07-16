const { app, BrowserWindow } = require("electron");

function createWindow() {
  const mainWindow = new BrowserWindow({ width: 800, height: 600, icon: __dirname + "/logo.png" });

  mainWindow.loadURL("http://localhost:3000");
}

app.on("ready", createWindow);
