// Create the below linked list:
// myLinkedListOne = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class MyLinkedListOneNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyLinkedListOne {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new MyLinkedListOneNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new MyLinkedListOneNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
    }
    return array;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value){
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new MyLinkedListOneNode(value);
    const leader = this.traverseToIndex(index - 1);
    const subsequent = leader.next;
    leader.next = newNode;
    newNode.next = subsequent;
    this.length++;
    return this.printList();
  }

  remove(index) {    
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while(second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

function myLinkedListOne() {
  let myLinkedListOne = new MyLinkedListOne(10);
  myLinkedListOne.append(5);
  myLinkedListOne.append(16);
  myLinkedListOne.prepend(12);
  console.log(JSON.stringify(myLinkedListOne.printList()));
  console.log(JSON.stringify(myLinkedListOne));
  myLinkedListOne.insert(2, 99);
  console.log(JSON.stringify(myLinkedListOne.printList()));
  console.log(JSON.stringify(myLinkedListOne));
  myLinkedListOne.insert(12234324234, 111);
  console.log(JSON.stringify(myLinkedListOne.printList()));
  console.log(JSON.stringify(myLinkedListOne));
  myLinkedListOne.remove(2);
  console.log(JSON.stringify(myLinkedListOne.printList()));
  console.log(JSON.stringify(myLinkedListOne));
  myLinkedListOne.reverse();
  console.log(JSON.stringify(myLinkedListOne.printList()));
  console.log(JSON.stringify(myLinkedListOne));
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    console.log(newNode)
    newNode.prev = this.tail
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    newNode.next = this.head;
    this.head.prev = newNode
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array;
  }
  insert(index, value){
    //Check for proper parameters;
    if(index >= this.length) {
      return this.append(value);
    }
    
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    const leader = this.traverseToIndex(index-1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    console.log(this)
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

function myDoublyLinkedList() {
  let doublyLinkedList = new DoublyLinkedList(10);
  doublyLinkedList.append(5);
  doublyLinkedList.append(16);
  doublyLinkedList.prepend(12);
  console.log(doublyLinkedList.printList());
  console.log(doublyLinkedList);
  doublyLinkedList.insert(2, 99);
  console.log(doublyLinkedList.printList());
  console.log(doublyLinkedList);
  doublyLinkedList.insert(12234324234, 111);
  console.log(doublyLinkedList.printList());
  console.log(doublyLinkedList);
}

function run() {
  myLinkedListOne();
  myDoublyLinkedList();
}

module.exports = {
  run
};