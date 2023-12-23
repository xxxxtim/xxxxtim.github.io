---
tags: [alogrithm,stack]
---


# Stack

## 何謂 Stack 

堆疊（英語：stack）又稱為棧或堆棧，是電腦科學中的一種抽象資料型別，只允許在<font color="blue">有序的線性資料集合</font>的一端（稱為堆疊頂端，英語：top）進行加入資料（英語：push）和移除資料（英語：pop）的運算。因而按照<font color="red">後進先出（LIFO, Last In First Out）</font>的原理運作，堆疊常用一維陣列或連結串列來實現。
![](https://i.imgur.com/CjiyVPe.png)

## Push

- 使用 linklist 實作並且建立節點

```js  showLineNumbers
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linklist {
  constructor() {
    this.head = null;
    this.length = 0;
  }

```

- push

```js  showLineNumbers
 push(value) {
    let newNode = new Node(value);
    // case 1 : 原本沒有任何節點，現在插入一個新節點
    // this : linklist
    if (this.length === 0) {
      this.head = newNode;
    }
    //  case 2 : 已有節點，現在加入新節點
    else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length++;
  } // push
```

- Show all

```js  showLineNumbers
  printAll() {
    if (this.length == 0) {
      console.log(`nothing in the linklist`);
    } else {
      let currentNode = this.head;
      while (currentNode !== null) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
      }
    }
  }
```

- 執行

```js  showLineNumbers
let myStack = new Linklist();
myStack.push("Tim");
myStack.push("Mike");
myStack.push("Jame");
myStack.push("Jason");
myStack.printAll();
```

- Result

```bash showLineNumbers
Running] node "/Users/yenting/Documents/Aglorithm/Stack.js"

Tim
Mike
Jame
Jason

[Done] exited with code=0 in 0.046 seconds
```

## POP

```js  showLineNumbers
 pop() {
    // 沒有任何一個節點
    if (!this.head) {
      return;
    }
    // 只有一個節點
    else if (this.length === 1) {
      let temp = this.head;
      this.head = null;
      this.length = 0;
      return temp;
    } else {
      let currentNode = this.head;
      for (let i = 1; i <= this.length - 2; i++) {
        currentNode = currentNode.next;
      }
      let temp = currentNode.next;
      currentNode.next = null;
      this.length--;
      return temp;
    }
  } // pop
```

- 執行

```js  showLineNumbers
let myStack = new Linklist();
myStack.push("Tim");
myStack.push("Mike");
myStack.pop();
myStack.push("Jame");
myStack.push("Jason");
myStack.printAll();
```

- Result

```bash showLineNumbers
[Running] node "/Users/yenting/Documents/Aglorithm/Stack.js"

Tim
Jame
Jason

[Done] exited with code=0 in 0.046 seconds
```

## 資料來源

- https://zh.wikipedia.org/zh-tw/%E5%A0%86%E6%A0%88
