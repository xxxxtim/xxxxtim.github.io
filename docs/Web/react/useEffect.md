---
tags: [react,web]
---
# [ react ]  useEffect 的使用 
useEffect Hook 允許你在組件中執行副作用操作
副作用的例子包括：獲取資料、直接更新 DOM，以及定時器。
useEffect 接受兩個參數，第二個參數是可選的。
```jsx  showLineNumbers
useEffect(<function>, <dependency> );
```     
## 使用 useEffect 時機
1. No dependency passed (如果不提供第二個參數，useEffect 會在<font color="yellow">每次渲染後執行</font>)
```jsx  showLineNumbers
useEffect(() => {
  //Runs on every render
});
```     
2. Empty dependency array (如果提供一個空陣列作為第二個參數，useEffect 只會在<font color="yellow">組件首次渲染後執行一次</font>)
```jsx  showLineNumbers
useEffect(() => {
  //Runs only on the first render
}, [])
```     
[Demo](https://www.w3schools.com/react/showreact.asp?filename=demo2_react_useeffect_settimeout2)
```jsx  showLineNumbers
// 這個範例展示了如何使用 useEffect 來建立一個計時器，該計時器每秒更新一次計數。
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);
```

3. Dependency array with values (<font color="yellow">當陣列中的值改變時，useEffect 會重新執行</font>)
```jsx  showLineNumbers
useEffect(() => {
  //Runs when the value of `count` changes
}, [count]);
```
[Demo](https://www.w3schools.com/react/showreact.asp?filename=demo2_react_useeffect_settimeout3)
```jsx  showLineNumbers
// 這個範例展示了如何使用 useEffect 來更新計算值，當計數器的值改變時，計算值會自動更新。
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);
```
## 資料來源：
https://www.w3schools.com/react/react_useeffect.asp
https://react.dev/reference/react/useEffect#usage
