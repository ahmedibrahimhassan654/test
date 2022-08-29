function getUnique(array) {
  var l = array.length,
    i,
    j,
    unique = [];

  for (i = 0; i < l; i++) {
    for (j = 0; j < l; j++) {
      if (i === j) {
        continue;
      }
      if (array[i] === array[j]) {
        break;
      }
    }
    if (j === l) {
      unique.push(array[i]);
    }
  }
  return unique;
}

export default getUnique;
