class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedListStack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value){
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop(){
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return holdingPointer;
  }
  //isEmpty
}

function linkedListStackExample() {
  const linkedListStack = new LinkedListStack();
  console.log(JSON.stringify(linkedListStack.peek()));
  console.log(JSON.stringify(linkedListStack.push('google')));
  console.log(JSON.stringify(linkedListStack.push('udemy')));
  console.log(JSON.stringify(linkedListStack.push('discord')));
  console.log(JSON.stringify(linkedListStack.peek()));
  console.log(JSON.stringify(linkedListStack.pop()));
  console.log(JSON.stringify(linkedListStack.pop()));
  console.log(JSON.stringify(linkedListStack.pop()));
}

class ArrayStack {
  constructor(){
    this.array = [];
  }
  peek() {
    return this.array[this.array.length-1];
  }
  push(value){
    this.array.push(value);
    return this;
  }
  pop(){
    this.array.pop();
    return this;
  }
}

function arrayStackExample() {
  const arrayStack = new ArrayStack();
  console.log(JSON.stringify(arrayStack.peek()));
  console.log(JSON.stringify(arrayStack.push('google')));
  console.log(JSON.stringify(arrayStack.push('udemy')));
  console.log(JSON.stringify(arrayStack.push('discord')));
  console.log(JSON.stringify(arrayStack.peek()));
  console.log(JSON.stringify(arrayStack.pop()));
  console.log(JSON.stringify(arrayStack.pop()));
  console.log(JSON.stringify(arrayStack.pop()));
}

class LinkedListQueue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value){
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue(){
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return this;
  }
  //isEmpty;
}

function linkedListQueueExample() {
  const linkedListQueue = new LinkedListQueue();
  console.log(JSON.stringify(linkedListQueue.peek()));
  console.log(JSON.stringify(linkedListQueue.enqueue('Joy')));
  console.log(JSON.stringify(linkedListQueue.enqueue('Matt')));
  console.log(JSON.stringify(linkedListQueue.enqueue('Pavel')));
  console.log(JSON.stringify(linkedListQueue.peek()));
  console.log(JSON.stringify(linkedListQueue.dequeue()));
  console.log(JSON.stringify(linkedListQueue.dequeue()));
  console.log(JSON.stringify(linkedListQueue.dequeue()));
  console.log(JSON.stringify(linkedListQueue.peek()));
}

class StackQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }
  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

function stackQueueExample() {
  const stackQueue = new StackQueue();
  console.log(JSON.stringify(stackQueue.peek()));
  console.log(JSON.stringify(stackQueue.enqueue('Joy')));
  console.log(JSON.stringify(stackQueue.enqueue('Matt')));
  console.log(JSON.stringify(stackQueue.enqueue('Pavel')));
  console.log(JSON.stringify(stackQueue.peek()));
  console.log(JSON.stringify(stackQueue.dequeue()));
  console.log(JSON.stringify(stackQueue.dequeue()));
  console.log(JSON.stringify(stackQueue.dequeue()));
  console.log(JSON.stringify(stackQueue.peek()));
}

function run() {
  linkedListStackExample();
  arrayStackExample();
  linkedListQueueExample();
}

module.exports = {
  run
};