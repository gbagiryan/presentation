const { fork } = require('child_process');

const child = fork('child.js');

child.send('Hey son');

child.on('exit', () => {
  console.log(`child process killed`);
  child.kill();
});

child.on('message', (childData) => {
  console.log(`child says: ${childData.toString()}`);
  child.kill();
});

// const exec = require('child_process').exec;
// exec('start chrome https://youtu.be/dQw4w9WgXcQ');
//
// exec('type index.js', (err, stdout, stderr) => {
//   console.log(stdout);
// });
//
//
//
// const spawn = require('child_process').spawn;
//
// if (process.argv[2] === 'child') {
//   console.log('hello from inside child process');
// } else {
//   const cp = spawn(process.execPath, [__filename, 'child']);
//   cp.stdout.on('data', (data) => {
//     console.log('child says: ' + data.toString());
//   });
// }

// const ask = () => {
//   process.stdout.write('Enter your name\n');
// };
//
// process.stdin.on('data', (data) => {
//   if (data.toString().trim() === 'stop') {
//     process.exit();
//   }
//   process.stdout.write('Hi ' +
//     data.toString().trim() + '\n');
//   ask();
// });
//
// process.on('exit', () => {
//     process.stdout.write('Bye');
//   }
// );
//
// ask();
