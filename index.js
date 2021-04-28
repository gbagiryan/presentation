const app = require('express')();
const {fork} = require('child_process');

//http://localhost:3000/isPrime?number=29355126551

app.get('/isPrime', (req, res) => {
    const childProcess = fork('./isPrime.js');
    childProcess.send({'number':parseInt(req.query.number)})
    childProcess.on('message', message => res.send(message))
    // const response = isPrime(parseInt(req.query.number));
    // res.send(response);
})

app.listen(3000, () => console.log('listening on 3000'));

// const isPrime = (number) => {
//     let startTime = new Date();
//     let endTime = new Date();
//     let isPrime = true;
//
//     for (let i = 3; i < number; i++) {
//         if (number % i === 0) {
//             endTime = new Date();
//             isPrime = false;
//             break;
//         }
//     }
//
//     if (isPrime) {
//         endTime = new Date();
//     }
//
//     return {
//         "number: ": number,
//         "isPrime: ": isPrime,
//         "time: ": endTime.getTime() - startTime.getTime()
//     }
// }
