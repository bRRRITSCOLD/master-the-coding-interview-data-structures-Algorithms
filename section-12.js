// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) { // O(n)
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) { // O(n)
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }
  for (let index = 2; index <= number; index++) {
    answer = answer * index;
  }
  return answer;
}

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){ // 0(n)
  let arr = [0, 1];
  for (let index = 2; index < n + 1; index++) {
    arr.push(arr[index - 2] + arr[index - 1]);
  }
  return arr[n];
}

function fibonacciRecursive(n) { // O(2^n)
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function reverseString(str) {
  let arrayStr = str.split("");
  let reversedArray = [];
  while (arrayStr.length) {
    reversedArray.push(arrayStr.pop())
  }
  return reversedArray.join("");
}

function reverseStringRecursive (str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

function run() {
  console.log(findFactorialRecursive(5));
  console.log(findFactorialIterative(5));
  console.log(fibonacciIterative(6));
  console.log(fibonacciRecursive(6));
  console.log(reverseString('yoyo master'));
  console.log(reverseStringRecursive('yoyo master'));
}

module.exports = {
  run
};
