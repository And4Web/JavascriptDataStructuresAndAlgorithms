class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = { value: value, next: null };

    if (!this.head) {
      this.head = newNode;
    }

    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;
  }

  prepend(value) {
    const newNode = { value: value, next: this.head };

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }

  toArray() {
    const elements = [];

    let currentNode = this.head;

    while (currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }

    return elements;
  }
}

let linkedList1 = new LinkedList();

linkedList1.append(1);
linkedList1.append("Harry");
linkedList1.append(true);
linkedList1.append(34.5);
linkedList1.prepend("prepended");

console.log(linkedList1.toArray());
