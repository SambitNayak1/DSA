class Stask {
  constructor() {
    this.stack = [];
  }
  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "The stck is empty so we can't perform pop operation";
    } else {
      return this.stack.pop();
    }
  }
  peek() {
    if (this.isEmpty()) {
      return 0;
    } else {
      return this.stack[this.size() - 1];
    }
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.stack.length;
  }
}

const stack = new Stask();
stack.push(10);
stack.push(69);
stack.push(30);

console.log(stack.size());

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.peek());
