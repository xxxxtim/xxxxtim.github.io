---
tags: [alogrithm,linklist]
sidebar_position: 4
---
# LinkList

## 時間複雜度

![](https://i.imgur.com/mwBM5GU.png)

## 適用時機：

- 無法預期資料數量或頻繁變動資料數量時。
- 需要頻繁地新增/刪除資料時。
- 不需要快速查詢資料。

## 優點：

- 新增/刪除資料比 Array 簡單，只要對要新增刪除的相關節點們調整指標即可，不需要像 Array 搬動其餘元素。
- linked list 的資料數量能動態的向記憶體要空間或釋放空間，不像 Array 會有 "<font color="red">重新定義陣列大小" </font>的問題。

## 缺點:

- 因為 linked list 不能直接透過索引值找到某節點(ex: 像陣列可以透過 array[index] 找到要的元素)，若要找到特定節點，<font color="blue">需要從頭開始找起。</font>
- 搜尋的時間複雜度為 O(N)。
- <font color="red"> 需要額外的記憶體空間來儲存指標。 </font>

* 相比於陣列，存取在<font color="blue">記憶體空間是不連續的</font>

## 建立 Linklist

![](https://i.imgur.com/A5jRZuE.png)

- Head : 指向第一個節點的 value
- Length : 表示節點的數量

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

```js

class Linklist {
  constructor() {
    this.head = null;
    this.length = 0;
  }
```

## Push

![](https://i.imgur.com/yJNdVmr.png)

```js
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

## POP

![](https://i.imgur.com/fEqjx3A.png)

```js
// pop 掉最後一個節點
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

## Shift

![](https://i.imgur.com/l9W9jdJ.png)

- 把第一個 element 拿掉

```js
shift() {
    if (!this.head) {
      return;
    } else if (this.length === 1) {
      // temp 表示 shift掉的值
      let temp = this.head;
      this.head = null;
      this.length--;
      return temp;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      this.length--;
      return temp;
    }
  } // shift
```

## UnShift

![](https://i.imgur.com/KVIfHEv.png)

- Add Element before first Element

```js
unshift(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      let temp = this.head;
      let newNode = new Node(value);
      this.head = newNode;
      newNode.next = temp;
    }
    this.length++;
  }
```

## InsertAt

![](https://i.imgur.com/YjOc1Tx.png)

```js
/ 於指定index插入指定節點
  insertAt(index, value) {
    // case1 指定的index不存在
    if (index > this.length || index < 0) {
      return null;
    } else if (index === 0) {
      // case2 插到第一個節點
      this.unshift(value);
      return;
    } else if (index === this.length) {
      // case3 插到最後一個節點
      this.push(value);
      return;
    }
    // other case
    let currentNode = this.head;
    let newNode = new Node(value);
    for (let i = 1; i <= index - 1; i++) {
      currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
    return;
  }
```

## get( specified Node )

```js
// 取得指定節點的值
  get(index) {
    if (index >= this.length || index < 0) {
      return null;
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }
```

```js
let myLinklist = new Linklist();
myLinklist.push("Tim");
myLinklist.push("Mike");
myLinklist.push("Jame");
myLinklist.push("Jason");

console.log(myLinklist.get(3));
```

```bash
[Running] node "/Users/yenting/Documents/Aglorithm/Linklist.js"

Jason

[Done] exited with code=0 in 0.038 seconds
```
