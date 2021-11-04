const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a ... to stdout
stdin.on('data', (key) => {
  if (key === '\u0003') {
    // \u0003 maps to ctrl+c input
    process.exit();
  } else if (key === 'b') {
    process.stdout.write(key);
    process.stdout.write('\x07')
  }
});

console.log('after callback');
