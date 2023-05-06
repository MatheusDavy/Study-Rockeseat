let x = 10

console.log("Início da execução")

if(!Number.isInteger(x)){
    throw new Error('O valor de X não é um número inteiro!')
}

console.log('Continuando código.....')

x = 10.5

if(!Number.isInteger(x)){
    throw new Error('O valor de X não é um número inteiro!')
}

console.log('Continuando código.....')


// When throw is called it code below is stopped  