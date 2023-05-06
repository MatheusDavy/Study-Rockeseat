const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function showMessage(note) {
    if (note >= 6) {
        console.log("Congratulations !!!")
    } else {
        console.log('You was eliminated :(')

    }
}

readline.question('Insert your firt note : ', (note)=>{
    note = Number(note)
    showMessage(note)
    readline.close()
})





