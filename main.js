const { app, BrowserWindow } = require('electron')
require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
})

function createWindow(){
    const win = new BrowserWindow({
        width: 390,
        height: 565,
        resizable: false
    })

    win.removeMenu()
    win.loadFile('src/index.html')
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', function(){
    if(process.platform !== 'darwin') app.quit()
})
