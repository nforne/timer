const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a ... to stdout
stdin.on('data', (key) => {
  let numlist = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (key === '\u0003') {
    // \u0003 maps to ctrl+c input
    process.stdin.write('Thanks for using me, ciao!\n');
    process.exit();
  } else if (key === 'b' || numlist.includes(key)) {
    process.stdout.write(key);
    process.stdout.write('\x07')
  }
});

console.log('after callback bipper: push the keys "b" or 1-9 and listen!');
