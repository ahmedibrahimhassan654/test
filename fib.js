function findFibs(num) {
  if (num < 2) {
    return [1, 1];
  } else {
    var fibs = findFibs(num - 1);
    if (fibs[fibs.length - 1] < num) {
      let toPush = fibs[fibs.length - 1] + fibs[fibs.length - 2];
      toPush < num ? fibs.push(toPush) : 0;
    }
    return fibs;
  }
}

export default findFibs;
