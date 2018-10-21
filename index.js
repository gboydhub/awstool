const {app, BrowserWindow} = require('electron');

let win = BrowserWindow({show: false, backgroundColor: "#3a3d50"});

win.once('ready-to-show', () => {
  win.show();
});

app.on('window-all-closed', () => {
  app.quit();
});