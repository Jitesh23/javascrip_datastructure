function Queue() {
// Method and properties go here
let items = [];

this.enqueue = function (element) {
  items.push(element);
};

this.dequeue = function () {
  return items.shift();
};

this.front = function () {
  return items[0];
};

this.isEmpty = function () {
  return items.length == 0;
};

this.size = function () {
  return items.length;
};

this.print = function () {
  console.log(items.toString());
};

};

let queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(10);
console.log(queue.isEmpty());
queue.print();
queue.dequeue();
queue.print();
