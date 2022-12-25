const solve = (commands) => {
  const cpu = {
    V00: 0,
    V01: 0,
    V02: 0,
    V03: 0,
    V04: 0,
    V05: 0,
    V06: 0,
    V07: 0,
  };

  const checkOverflow = (result) => {
    result > 255 ? (result = result - 256) : result;
    result < 0 ? (result = 256 + result) : result;
    return result;
  };

  const compile = (command, line) => {
    let from, target, result;
    switch (command) {
      case 'MOV':
        [from, target] = line.slice(4).split(',');
        cpu[from]
          ? (cpu[target] = cpu[from])
          : (cpu[target] = Number(from));
        break;
      case 'ADD':
        [target, from] = line.slice(4).split(',');
        result = checkOverflow(cpu[from] + cpu[target]);
        cpu[target] = cpu[from] + cpu[target];
        break;
      case 'DEC':
        target = line.split(' ')[1];
        result = checkOverflow(cpu[target] - 1);
        cpu[target] = result;
        break;
      case 'INC':
        target = line.split(' ')[1];
        result = checkOverflow(cpu[target] + 1);
        cpu[target] = result;
        break;
      case 'JMP':
        break;
    }
  };

  for (let i = 0; i < commands.length; i++) {
    const current = commands[i];
    const order = current.slice(0, 3);
    compile(order, current);
  }

  return Object.values(cpu);
};

/*
solve([
  'MOV 5,V00', // V00 is 5
  'MOV 10,V01', // V01 is 10
  'DEC V00', // V00 is now 4
  'ADD V00,V01', // V00 = V00 + V01 = 14
]);
*/

/*
solve([
  'MOV 255,V00', // V00 is 255
  'INC V00', // V00 is 256, overflows to 0
  'DEC V01', // V01 is -1, overflows to 255
  'DEC V01', // V01 is 254
]);
*/

solve([
  'MOV 10,V00', // V00 is 10
  'DEC V00', // decrement V00 by 1  <---┐
  'INC V01', // increment V01 by 1      |
  'JMP 1', // loop until V00 is 0 ----┘
  'INC V06', // increment V06 by 1
]);

module.exports = { solve };