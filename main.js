const { app, BrowserWindow } = require('electron')
const path = require("path");
const url = require("url");
let win;

let loadingScreen;
const createLoadingScreen = () => {
  // create a browser window with loading
  loadingScreen = new BrowserWindow(
    Object.assign({
       parent: win 
    }),
   
  );
  const loadingUrl = process.env.ELECTRON_START_URL || url.format({
      pathname: path.join(__dirname,  'dist/loading.html'),
      protocol: 'file:',
      slashes: true
    });
  loadingScreen.loadURL(loadingUrl);
  loadingScreen.show();
  
  loadingScreen.on('closed', () => (loadingScreen = null));

}

function createWindow() {

  // Crea la ventana del navegador.
  win = new BrowserWindow({
    show: false,
    width: 800,
    height: 600,
    backgroundColor: '#2e2c29',
    icon: `file://${__dirname}/dist/assets/images/ontimize.png`,
    //titleBarStyle :'customButtonsOnHover' ,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    }
  })


  // y carga el index.html de la aplicación.
  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, 'dist/index.html'),
    protocol: 'file:',
    slashes: true
  });


  win.loadURL(startUrl);

  // Abre las herramientas de desarrollo (DevTools).
  //win.webContents.openDevTools()
  
  // Emitido cuando la ventana es cerrada.
  win.on('closed', () => {
    // Elimina la referencia al objeto window, normalmente  guardarías las ventanas
    // en un vector si tu aplicación soporta múltiples ventanas, este es el momento
    // en el que deberías borrar el elemento correspondiente.
    win = null
  })

  win.once('ready-to-show', () => {
    if (loadingScreen) {
      loadingScreen.destroy();
    }
    win.show()
  })
}

app.on('ready',()=>{
   createLoadingScreen();
   createWindow();
});

// Sal cuando todas las ventanas hayan sido cerradas.
app.on('window-all-closed', () => {
  // En macOS es común para las aplicaciones y sus barras de menú
  // que estén activas hasta que el usuario salga explicitamente con Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // En macOS es común volver a crear una ventana en la aplicación cuando el
  // icono del dock es clicado y no hay otras ventanas abiertas.
  if (win === null) {
    createWindow()
  }
})
