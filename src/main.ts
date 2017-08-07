import { app, BrowserWindow } from 'electron';
import * as path from 'path';

app.on('ready', function () {
  var mainWindow = new BrowserWindow({
    width: 800, height: 600, minWidth: 800, webPreferences: {
      experimentalFeatures: true,
    },
    title: 'bookmark0r'
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  console.log(path.dirname);
});

app.on('window-all-closed', function () {
  app.quit();
});