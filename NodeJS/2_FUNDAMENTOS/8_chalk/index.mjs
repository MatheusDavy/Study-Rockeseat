// node index.mjs

import chalk from "chalk"

function showMessage(note) {
    if (note >= 6) {
        console.log(chalk.green("Congratulations !!!"))
    } else {
        console.log(chalk.red('You was eliminated :('))

    }
}

const note = 9
showMessage(note)

const note2 = 5 
showMessage(note2)