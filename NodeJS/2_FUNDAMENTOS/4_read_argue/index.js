//  node index.js name=matheus age=20

console.log(process.argv)

const args = process.argv.slice(2)
console.log(args)

const name = args[0].split('=')[1]
console.log(name)

const age = args[1].split('=')[1]
console.log(age)

const result = `${name} is ${age} years old.`
console.log(result)
