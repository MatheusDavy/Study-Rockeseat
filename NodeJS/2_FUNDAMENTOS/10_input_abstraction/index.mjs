import inquirer from "inquirer"

function showMessage(note) {
    if (note >= 6) {
        console.log("Congratulations, you are approved !")
    } else {
        console.log("Sorry, You aren´t approved !")
    }
}

function calcAverage(p1, p2) {
    const average = (p1 + p2) / 2
    console.log('Your average is : ' + average)
    showMessage(average)
}

inquirer.prompt([
    {
        name: 'p1',
        message: 'Insert you first note : '
    }, {
        name: 'p2',
        message: 'Insert you second note : '
    }
]).then(responses => {
    const p1 = Number(responses.p1)
    const p2 = Number(responses.p2)
    calcAverage(p1, p2)
}
).catch(err => console.log(err))
