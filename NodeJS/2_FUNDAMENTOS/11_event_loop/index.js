function a() {
    console.log('executando a()')
}

function b() {
    console.log('executando b()')
}

function c() {
    console.log('executando c()')
    b()
    c()
}

a()

// Event Loop garante que o código sejá executado um após o outro