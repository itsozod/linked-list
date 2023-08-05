class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  append(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let listHead = this.head;
      while (listHead.next) {
        listHead = listHead.next;
      }
      listHead.next = newNode;
    }
    this.size++;
  }

  headValue() {
    if (!this.head) {
      return null;
    } else {
      console.log(this.head.data);
    }
  }

  tailValue() {
    let listHead = this.head;

    if (!listHead) {
      return null;
    }

    while (listHead.next != null) {
      listHead = listHead.next;
    }
    console.log(listHead.data);
  }

  sizeList() {
    let listHead = this.head;
    let sizeList = 0;
    while (listHead != null) {
      listHead = listHead.next;
      sizeList++;
    }
    console.log(sizeList);
    return sizeList;
  }

  pop() {
    let listHead = this.head;
    if (!listHead) {
      return null;
    }
    if (listHead === this.next) {
      const poppedNode = this.head;
      this.head = null;
      this.next = null;
      console.log("The list is empty");
      return poppedNode.data;
    }
    let previous = null;
    while (listHead.next) {
      previous = listHead;
      listHead = listHead.next;
    }
    previous.next = null;
    this.next = previous;
    return listHead.data;
  }

  contains(value) {
    if (!this.head) {
      return null;
    }
    if (value === this.head.data || value === this.next.data) {
      return true;
    } else {
      return false;
    }
  }

  findValue(value) {
    let index = 0;
    let listHead = this.head;

    while (listHead != null) {
      if (value === listHead.data) {
        console.log(`The index of the ${value} is ${index}`);
        return index;
      } else {
        listHead = listHead.next;
        index++;
      }
    }
    console.log("The given value doesn't exist");
    return null;
  }

  atIndex(index) {
    let listHead = this.head;
    let currentIndex = 0;

    while (listHead != null) {
      if (index === currentIndex) {
        console.log(
          `The value of of the given index ${index} is ${listHead.data}`
        );
        return listHead.data;
      } else {
        listHead = listHead.next;
        currentIndex++;
      }
    }
    console.log("The index doesn't exist");
    return null;
  }

  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return null;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const node = new Node(data);
    let current;
    let previous;
    let count = 0;

    current = this.head;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;

    this.size++;
  }

  removeAtIndex(index) {
    if (index > 0 && index > this.size) {
      return;
    } else if (!this.head) {
      return null;
    }
    let current = this.head;
    let previous;
    let count = 0;
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  toString() {
    let listHead = this.head;
    let stringList = "";

    while (listHead != null) {
      stringList += `(${listHead.data}) ->`;
      listHead = listHead.next;
    }
    console.log((stringList += "null"));
    return (stringList += "null");
  }

  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
const list = new LinkedList();
list.prepend(100); // inserts value on head
list.prepend(200); // inserts value on head
list.prepend(300); // inserts value on head
list.prepend(400); // inserts value on head
list.prepend(600); // inserts value on head
list.append(500); // appends the value to the end of the list
list.pop(); // pops the last value the linked list
list.pop(); // pops the last value the linked list
list.pop(); // pops the last value the linked list
list.pop(); // pops the last value the linked list
// list.pop(); // pops the last value the linked list
list.headValue(); // shows head value
list.tailValue(); // shows tail value
console.log(list.contains(400)); // checks if the linked list contains the value in it, if yes returns true if no false
list.findValue(400); // checks if value exists in the linked list, if yes returns its index, if no returns null
list.atIndex(2); // returns a node at the given index
list.insertAt(500, 10); // inserts a node at the given index
list.removeAtIndex(11); // remove a node at the given index, if index doesn't exist returns nothing
list.printListData(); // prints list datas
list.toString(); // converts the values to string
list.sizeList(); // shows the size of the list like length
