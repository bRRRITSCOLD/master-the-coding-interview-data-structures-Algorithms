const bubbleSortNumbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const arrayLength = array.length;
  for (let i = 0; i < arrayLength; i++) {
    for (let j = 0; j < arrayLength; j++) {
      if (array[j] > array[j + 1]) {
        const holder =  array[j];
        array[j] = array[j + 1];
        array[j + 1] = holder;
      }
    }
  }
}

const selectionNumbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const arrayLength = array.length;
  for (let i = 0; i < arrayLength; i++) {
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < arrayLength; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
}

function run() {
  bubbleSort(bubbleSortNumbers);
  console.log(JSON.stringify(bubbleSortNumbers));

  selectionSort(selectionNumbers);
  console.log(JSON.stringify(selectionNumbers));
}

module.exports = {
  run
};
