const fs = require('fs')

console.log("Inicio")

async function teste(){
    const userDatas = await fetch("teste").then(res => res.json()).catch(() => console.log('Deu erro aqui'))
    console.log("Data Users: " + userDatas)
}
teste()

fs.writeFileSync("arquivo.txt", "Olá", function(err) {
    setTimeout(()=>{
        console.log('Arquivo Criado')
    }, 1000)
})

console.log("Fim")
