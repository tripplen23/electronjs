const { BrowserWindow, ipcMain, Tray, nativeImage } = require("electron");
const Task = require("./models/Task");

let tray = null;
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 500,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  win.loadFile("app/index.html");

    // Create the system tray icon
  const icon = nativeImage.createFromPath('./assets/icon/trayIconTemplate.png')
  tray = new Tray(icon)

  tray.setToolTip('CRUD-ElECTRON, play with your plan')

  tray.on('click', () => {
    win.isVisible()?win.hide():win.show()
  })

}

ipcMain.on("new-task", async (e, arg) => {
  const newTask = new Task(arg);
  const taskSaved = await newTask.save();
  e.reply("new-task-created", JSON.stringify(taskSaved));
});

ipcMain.on("get-tasks", async (e, arg) => {
  const tasks = await Task.find();
  e.reply("get-tasks", JSON.stringify(tasks));
});

ipcMain.on("delete-task", async (e, args) => {
  const taskDeleted = await Task.findByIdAndDelete(args);
  e.reply("delete-task-success", JSON.stringify(taskDeleted));
});

ipcMain.on("update-task", async (e, args) => {
  console.log(args);
  const updatedTask = await Task.findByIdAndUpdate(
    args.idTaskToUpdate,
    { name: args.name, description: args.description },
    { new: true }
  );
  e.reply("update-task-success", JSON.stringify(updatedTask));
});

module.exports = { createWindow };
