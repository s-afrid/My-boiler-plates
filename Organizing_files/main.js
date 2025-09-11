const path = require('path')
const fs = require('fs')
function main(){
// Get name of all files in the directory
let directory = 'D:\\html files\\WebDev\\WebDev\\All_of_javascript\\Backend\\Excercise\\clutter\\folder'
let files = fs.readdirSync('folder')
// Extract in extensions
let exts = []
for (const f of files) {
    e = path.extname(f).slice(1)
    if (!(exts.includes(e))){
        exts.push(e)
    }
}
// Creating directories based on extension
for (const e of exts) {
    fs.mkdirSync(`folder/${e}`,{recursive: true})
}
// Moving files to the directories
for (const f of files){
    ext = path.extname(f).slice(1)
    fs.rename(`folder/${f}`,`folder/${ext}/${f}`, function (err) {
        if (err) throw err
    })
}
}
main()
