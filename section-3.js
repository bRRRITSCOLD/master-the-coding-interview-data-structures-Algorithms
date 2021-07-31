const { performance } = require('perf_hooks');

const nemo = ["nemo"];
const nemoEveryone = ["bill", "bob", "harry", "bruce", "dory", "fred", "willy", "scott", "jim", "nemo"];

/**
 * @param {string[]} array
 * Time Complexity: O(n)
 */
function findNemo(array) {
  let t0 = performance.now();
  for (let index = 0; index < array.length; index++) {
    if (array[index] === 'nemo') {
      console.log('found nemo');
    }
  }
  let t1 = performance.now();
  console.log('call to findNemo took ' + (t1-t0) + " milliseconds");
}

/**
 * @param {string[]} array
 * Time Complexity: O(n)
 */
function findNemoTwo(array) {
  let t0 = performance.now();
  for (let index = 0; index < array.length; index++) {
    if (array[index] === 'nemo') {
      console.log('found nemo');
    }
  }
  let t1 = performance.now();
  console.log('call to findNemoTwo took ' + (t1-t0) + " milliseconds");
}

/**
 * @param {string[]} array
 * Time Complexity: O(1) Constant Time
 */
function compressFirstBox(boxes) {
  console.log(JSON.stringify(boxes[0]));
}

/**
 * @param {string[]} array
 * Time Complexity: O(2) -> we round to O(1) Constant Time
 */
 function compressFirstTwoBoxes(boxes) {
  console.log(JSON.stringify(boxes[0]));
  console.log(JSON.stringify(boxes[1]));
}

// Big - O Exercise
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true;  // O(n)
    a++;  // O(n)
  }
  return a; // O(1)
}
// Given Answer: O(n)
// Actual Answer: O(3 + 4n) -> gets simplified to O(n)

// Big - O Exercise 2
// Actual Answer: O(3 + 4n) -> gets simplified to O(n)
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) { // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)

  }
  for (let j = 0; j < input; j++) { // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1))
}
// Given Answer: O(n)
// Actual Answer: O(4 + 7n) -> gets simplified to O(n)

/**
 * @param {any[]} items
 * @description Time Complexity: O(3 + n/2 + 100) -> drop constants -> O(n)
 */
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]); // O(1)

  var middleIndex = Math.floor(items.length / 2); // O(1)
  var index = 0; // O(1)

  while (index < middleIndex) { // O(n/2)
      console.log(items[index]);
      index++;
  }

  for (var i = 0; i < 100; i++) { // O(100)
      console.log('hi');
  }
}

/**
 * @param {any[]} boxes
 * Time Complexity: O(2n) -> drop constants -> O(n) Constant Time
 */
 function compressBoxesTwice(boxes) {
  boxes.forEach((box) => {
    console.log(JSON.stringify(box));
  });

  boxes.forEach((box) => {
    console.log(JSON.stringify(box));
  });
}

/**
 * @param {any[]} boxes
 * Time Complexity: O(n + m)
 */
 function compress2ListsOfBoxes(boxes, boxes2) {
  boxes.forEach((box) => {
    console.log(JSON.stringify(box));
  });

  boxes2.forEach((box) => {
    console.log(JSON.stringify(box));
  });
}

/**
 * @param {any[]} array
 * Time Complexity: O(n * n) -> O(n^2) Quadratic Time
 */
function logAllPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(JSON.stringify(array[i]), JSON.stringify(array[j]));
    }
  }
}

/**
 * @param {any[]} array
 * Time Complexity: O(n + n^2) -> drop non dominants -> O(n^2) Quadratic Time
 */
function printAllNumbersThenAllPairSums(numbers) {

  console.log('these are the numbers:');
  numbers.forEach(function(number) { //O(n)
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function(firstNumber) { //O(n)
    numbers.forEach(function(secondNumber) { //O(n)
      console.log(firstNumber + secondNumber);
    });
  });
}

/**
 * @param {number} n
 * Space Complexity: O(1)
 */
function boooo(n) {
  for (let i = 0; i < n; i++) {
      console.log('booooo');
  }
}

/**
 * @param {number} n
 * Space Complexity: O(n)
 */
function arrayOfHiNTimes(n) {
  var hiArray = [];
  for (let i = 0; i < n; i++) {
      hiArray[i] = 'hi';
  }
  return hiArray;
}

function run() {
  findNemo(nemo);
  findNemo(nemoEveryone);
  findNemoTwo(nemo);
  findNemoTwo(nemoEveryone);
  logAllPairs([1,2,3,4,5]);
  printAllNumbersThenAllPairSums([1,2,3,4,5])
  boooo(6)
  console.log(JSON.stringify(arrayOfHiNTimes(6)))
}

module.exports = {
  run
};