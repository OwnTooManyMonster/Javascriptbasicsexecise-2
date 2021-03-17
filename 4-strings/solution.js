function isEmptyString(str) {
  if (str === "") {
    return true;
  } else {
    return false;
  }
}

function isIncluded(a, b) {
  const included = a.includes(b);
  if (included === true) {
    return true;
  } else {
    return false;
  }
}

function firstCharacter(str) {
  return str[0];
}

function lastCharacter(str) {
  return str[str.length - 1];
}
//accesing propertis of a object by .//

function capitalize(str) {
  const firstLow = firstCharacter(str);
  const rest = str.slice(1);
  const firstUp = firstLow.toUpperCase(str);
  return firstUp + rest;
}
console.log(capitalize("david"));
console.log(isEmptyString(""));
console.log(isEmptyString("David"));
console.log(firstCharacter("David"));
console.log(lastCharacter("David"));
