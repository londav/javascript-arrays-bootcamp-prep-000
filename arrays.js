var ingredient1 = "bread";
var ingredient2 = "mild cheese";
var ingredient3 = "sharp cheese";
var ingredient4 = "butter";
var ingredient5 = "tomato";
var ingredient6 = "garlic";

var chocolateBars = ['snickers', 'hundered grand', 'kitkat', 'skittles'];

var array = [1, 2, 3, 'foo'];

function addElementToBeginningOfArray(array, element) {
  var newArray = array.unshift(element);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementtoEndOfArray(array, element) {
  const newArray2 = array.push(element);
  return newArray2;
}

function destructivelyAddElementtoEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  newArray3 = array.slice(1)
  return newArray3;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  array.slice(0, array.length -1);
}

