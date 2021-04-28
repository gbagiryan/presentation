process.on('message', (data) => {
  console.log(`parent said: ${data.toString()}`);
  process.send('Hey dad');
});
