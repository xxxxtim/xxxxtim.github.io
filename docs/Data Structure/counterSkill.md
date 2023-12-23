---
tags: [alogrithm,counterSkill]
sidebar_position: 4
---

# CounterSkills 技巧使用

## SameFrequence 問題

在刷 leetcode 的過程中，大家是否會遇到一個問題：<font color ="red">_判斷兩個矩陣是否含有相同的元素_</font>

- case1: not same freq :(a,b,b,c)=>1a2b1c (a,a,b,c)=>2a1b1c
- case2: same freq (a,a,b,c,) / (a,b,a,c)

至於在解題的過程中，其實只要用兩個迴圈去 query 就可以來判斷是否兩個矩陣是否含有相同的元素，<mark>只是！</mark>
就是這個只是，此種作法會造成 <font color="blue">BigO 過大，而不推薦此種做法 。</font>

那可以使用何種做法來降低時間複雜度呢？ 就是我們接下來要介紹的 Counter-Skill 技巧

## Counter-Skill：

此種技巧主要是用物件的方式（key and value)來記錄矩陣中的子元素，相較於迴圈去 query 的做法，此種做法的時間複雜度會來的比較小; 缺點則是所使用的記憶體會來的比較大。

## 解題如下：

1. 宣告兩個物件來記錄矩陣的子元素
2. 比對兩個物件的長度與紀錄的次數

```js
class SameFreq {
  ifSameFreq(str1, str2) {
    let arr1 = str1.split("");
    let arr2 = str2.split("");
    if (arr1.length !== arr2.length) {
      console.log(`not same`);
      return false;
    } else {
      // use counter skills
      let counter1 = {};
      let conunter2 = {};
      arr1.map((val, index) => {
        !counter1[val] ? (counter1[val] = 1) : counter1[val]++;
      });
      arr2.map((val, index) => {
        !conunter2[val] ? (conunter2[val] = 1) : conunter2[val]++;
      });
      Object.keys(counter1).forEach((key) => {
        if (!conunter2[key]) {
          console.log(`not same`);
          return false;
        } else if (conunter2[key] !== counter1[key]) {
          console.log(`not same`);
          return false;
        }
        return true;
      });
      console.log(`same freq`);
    }
  }
}
```
