const { app, BrowserWindow, Menu } = require("electron");

let win;

function createWindow() {
  // 创建浏览器窗口。
  win = new BrowserWindow({ width: 800, height: 600 });

  // 然后加载应用的 index.html。
  win.loadURL("http://localhost:3000");

  // 当 window 被关闭，这个事件会被触发。
  win.on("closed", () => {
    win = null;
  });

  // 2.创建菜单模板,数组里的每一个对象都是一个菜单
  const template = [
    {
      label: "菜单一",
      // submenu 代表下一级菜单
      submenu: [
        {
          label: "子菜单一",
          // 添加快捷键
          accelerator: "ctrl+n",
        },
        { label: "子菜单二" },
        { label: "子菜单三" },
        { label: "子菜单四" },
      ],
    },
    {
      label: "菜单二",
      // submenu 代表下一级菜单
      submenu: [
        { label: "子菜单一" },
        { label: "子菜单二" },
        { label: "子菜单三" },
        { label: "子菜单四" },
      ],
    },
  ];

  // 3.从模板中创建菜单
  const myMenu = Menu.buildFromTemplate(template);

  // 4.设置为应用程序菜单
  Menu.setApplicationMenu(myMenu);
}

app.on("ready", () => {
  createWindow();
});

// 当全部窗口关闭时退出。
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
