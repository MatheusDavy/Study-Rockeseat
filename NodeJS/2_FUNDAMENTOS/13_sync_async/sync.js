const fs = require('fs')


console.log("Inicio")

fs.writeFileSync("arquivo.txt", "Olá")

console.log("Fim")