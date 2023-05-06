// node index.js --a=20 --b=50
const minimist = require('minimist')
const myModule = require("./soma")

// Externals
const args = minimist(process.argv.slice(2))
console.log(args)

// Internals
const soma = myModule.soma

const a = parseInt(args['a'])
const b = parseInt(args['b'])

soma(a, b)