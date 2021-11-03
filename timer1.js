const alarms = process.argv.slice(2);

const timer1 = (alarms) => {
  for (const i of alarms) {
    if (Number(i)*1 !== "NaN" && !(i < 0)) {
      setTimeout(() => process.stdout.write('\x07'), Number(i)*1000); 
    }
  }
};

timer1(alarms); 
