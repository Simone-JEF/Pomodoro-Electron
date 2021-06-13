const { app, BrowserWindow } = require('electron')

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
