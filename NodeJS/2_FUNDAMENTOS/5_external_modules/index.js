// node index.js --nome=davys --jobs='developer'

const minimist = require('minimist')

const args = minimist(process.argv.slice(2))
console.log(args)

const nome = args['nome']
const jobs = args['jobs']

const result = `${nome} works like ${jobs}.`
console.log(result)