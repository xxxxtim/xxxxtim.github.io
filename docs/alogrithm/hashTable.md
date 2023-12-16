---
tags: [algorithm,hashTable]
sidebar_position: 5
---


# Hash Table

## 何謂HashTable：

雜湊表（Hash table，也叫哈希表），是根據**`Key 而直接查詢在記憶體儲存位置的資料結構`**也就是說，它通過計算出一個鍵值的函數，將所需查詢的數據映射到表中一個位置來讓人查詢，這加快了查找速度。<font color="red">**這個映射函數稱做雜湊函數(Ｈash Function)**</font>，存放記錄的數組稱做雜湊表

## Hash Function_1 Division Function

:::info

- m = HashTable size
- n = number elements store in the hashTable
- Index = Key mod m
  
  以下面這個例子來看：
- m = 5 (HashTable size)
- n = 3 (Mike / Jason / Tim)
- Index(Mike) = 123/5 = 24 ...**3**

  
:::
  ![](https://i.imgur.com/ohsmUEW.png)

## Multiplication Method

- m = HashTable size
- n = number elements store in the hashTable
- **<font color ="red">Index = [ m ( key*A % 1 ) ]</font>**
- **<font color="blue">A = (√5-1) / 2 </font>**
- 相較於 Division method，此種方法<font color="green">**_隨機性會比較大，Collision 出現的機率會來的比較小_**</font>

## Handling Collision

- 不論使用何種方法，一定會有 Collision
- 當 element 產生 Collision 時，<font color="red">**_使用陣列把 collision-elements 存取起來_**</font>

## 實作如下：


```js title="Build hashTable" showLineNumbers

class Hashtable {
  // m =hashtable size
  constructor(size) {
    this.size = size;
    this.table = [];
    for (let i = 0; i <= this.size; i++) {
      this.table.push([]);
    }
  }
  // division method
  hash_1(key) {
    return key % this.size;
  }

  // multiplication method
  hash_2(key) {
    const A = (Math.sqrt(5) - 1) / 2;
    return Math.floor(this.size * ((key * A) % 1));
  }
  set(key, value) {
    // value: Mike key: 11545
    let index = this.hash_2(key);
    this.table[index].push({ key, value });
  }
  get(key) {
    const index = this.hash_2(key);
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i].key === key) {
        return this.table[index][i];
      }
    }
  }
  printAll() {
    console.log(this.table);
  }
}
```

- 執行

```js  showLineNumbers
let myHashTable = new Hashtable(6);
myHashTable.set(11424, "mike");
myHashTable.set(14, "tim");
myHashTable.set(113, "Jason");

myHashTable.printAll();
```

- 結果

```bash title="[Running] node / Users / yenting / Documents / Algorithm / HashTable.js" showLineNumbers
# [Running] node "/Users/yenting/Documents/Algorithm/HashTable.js"
[
  [],
  [],
  [ { key: 11424, value: 'mike' } ],
  [ { key: 14, value: 'tim' } ],
  [],
  [ { key: 113, value: 'Jason' } ],
  []
]

[Done] exited with code=0 in 0.043 seconds
```

## Hash keys are not number
:::info
接下來我們試著思考一個問題，<font color="red">**如果HashTable的key不是數字我們該如何去處裡？**</font>

1. The simplest (but not very effective) algorithm is to use the length of the string.(把 key 的長度當成數值)
2. you could take the sum of all the ASCII values of all the characters in the string.(轉換成 ASCII code)
:::
<!-- - build parse function -->

```js title="build parse function" showLineNumbers

parse(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      result = str.charCodeAt(i);
    }
    return result % this.size;
  }
```

<!-- - refactor hash_2 -->

```js title="refactor hash_2" showLineNumbers
// multiplication method
  hash_2(key) {
    let parsedkey = typeof key !== "number" ? this.parse(key) : key;
    const A = (Math.sqrt(5) - 1) / 2;
    return Math.floor(this.size * ((parsedkey * A) % 1));
  }
```

- 執行如下

```js showLineNumbers
myHashTable.set("white", "#FFFFFF");
myHashTable.set("magenta", "#FF00FF");
myHashTable.set("red", "#FF0000");

myHashTable.printAll();
```

```bash showLineNumbers
[
  [ { key: 'white', value: '#FFFFFF' } ],
  [],
  [ { key: 'red', value: '#FF0000' } ],
  [ { key: 'magenta', value: '#FF00FF' } ],
  [],
  [],
  []
]
```

## 資料來源

- https://zh.wikipedia.org/zh-tw/%E5%93%88%E5%B8%8C%E8%A1%A8