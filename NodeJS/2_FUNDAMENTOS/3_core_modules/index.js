const path = require("path")
// Module already integrated in NodeJs

const extension = path.extname("arquivo.php")
// .extname = return file extension name, explaple '.php', '.pdf', '.html'

console.log(extension)