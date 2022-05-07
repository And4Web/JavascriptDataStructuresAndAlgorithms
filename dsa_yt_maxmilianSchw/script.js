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

  delete(value) {
    if (!this.head) {
      return;
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    console.log("currentNode before tail check: ", currentNode);

    if (this.tail.value === value) {
      this.tail = currentNode;
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
linkedList1.append("Harry");
linkedList1.append(true);
linkedList1.append(34.5);
linkedList1.append(3939696);
linkedList1.prepend("prepended");

console.log("First List: ", linkedList1.toArray());

linkedList1.delete("Harry");
linkedList1.delete(3939696);
linkedList1.delete("prepended");

console.log("List after Deletion: ", linkedList1.toArray());
