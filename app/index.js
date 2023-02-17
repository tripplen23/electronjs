const { createWindow } = require("./main");
const { app, Menu, MenuItem } = require("electron");
const { colorSelection, changeColor } = require("./colorConfig")

require("./database");


app.on('ready', () => {
  createWindow();

  const template = [
    {
      label: 'App',
      submenu: [
        {role: 'About'},
        {role: 'quit'},
        {role: 'togglefullscreen'},
        {role: 'zoomIn'},
        {role: 'zoomOut'},
        {role: 'resetZoom'}
      ]
    },
    {
      label: 'Edit',
      submenu: [
        {...colorSelection},
        {role: 'undo'},
        {role: 'redo'},
        {role: 'seperator'},
        {role: 'cut'},
        {role: 'copy'},
        {role: 'paste'},
        {role: 'delete'},
        {role: 'selectall'}
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  const contextMenu = new Menu();
  contextMenu.append(new MenuItem({...colorSelection}))

})

try {
  require('electron-reloader')(module)
} catch (_) {}

app.allowRendererProcessReuse = false;
