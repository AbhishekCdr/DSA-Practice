/*
 ->Linked list is a linear data structure whre each element in the list is contained in a seperate onject called a node
 ->stores value in form of list

-> node stores two data
1. individual data we want to store
2. reference to the next node in the list
 ________________________
| 5 -> 1 -> 3 -> 2 -> 6 |
head                   tail
*/

//Link to: https://www.freecodecamp.org/news/data-structures-in-javascript-with-examples/#linked-lists

//SINGLY LINKED LIST

//class for each node
class Node {
  //each node has two props its value and pointer
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  //list has three props head, tail, and list size
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //push method takes a value as a parameter and assigns it as the tail of the list
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //the pop method removes the tail of the list
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // The shift method removes the head of the list
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  // The unshift method takes a value as parameter and assigns it as the head of the list
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  // The get method takes an index number as parameter and returns the value of the node at that index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    const counter = 0;
    const current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  // The set method takes an index number and a value as parameters, and modifies the node value at the given index in the list
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  // The insert method takes an index number and a value as parameters, and inserts the value at the given index in the list
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  // The remove method takes an index number as parameter and removes the node at the given index in the list
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  // The reverse method reverses the list and all pointers so that the head becomes the tail and the tail becomes the head
  reverse() {
    const node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    const prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SingleLinkedList();
list.push(45);
list.push(5);
list.push(4);
console.log(list);

list.pop();
console.log(list);
