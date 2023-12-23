---
sidebar_position: 3
---

# CodingStyle

## 為什麼要有命名規則？？

- 好的命名方式有助於在專案之間<font color="red">產生好的溝通，更容易傳遞訊息</font>
- 有助於<font color="red">減少名稱的增生（name proliferation）</font>。
  Ex:計算全部點數的名稱可以叫 pointTotal，也可以叫 totalPoint，這樣一來會造成日後閱讀你程式碼的人困擾
- 當你寫的程式規模太大時，以致於你無法了解事情的全部面貌時，你可以藉由命名規則<font color="red">使自己更專注在自己的開發上</font>

## 常見的命名方式

- 變數
- 函數
- 巨集（macro）
- 檔案
- 匈牙利命名法（Hungarian notation）
- 駝峰式命名法（Camel case）
- 帕氏卡命名法（Pascal）

### 變數的命名

通常都是<font color="red">名詞</font>，可以直接反應出變數所代表的意思。。
Ex： totalMoney 或是 exchangeRate

如果不用名詞，通常也會是<font color="red">名詞化的動詞</font>！
Ex：widgetLength 等等。

### 函數的命名

通常使用<font color="red">動詞</font>來表達函數的動作。

儘量隱藏函數內部的具體實作過程，始終從使用者的角度來為函數命名。
Ex： **count**Oranges() 、 member.**get**Name() 等。

### 巨集（macro）的命名

名稱全使用<font color="red">大寫字母</font>，如果使用專案名稱來命名更好！

Ex：PROJECT_NAME_MACRO

### 檔案的命名

大小寫不同的系統中，儘量**不要同時有大小寫不同的檔案名**稱，例： math.h 或是 Math.h

如果專案中使用了不同語言，則儘量不要使用相同的檔名而不同的副檔名。

Ex： detection.c 或是 detection.java

儘量**確保所有的檔案名稱都不相同**，即使是在不同的目錄內。

### 匈牙利命名法（Hungarian notation）

此命名法又可細分為：系統<font color="blue">匈牙利命名法</font>和<font color="blue">匈牙利應用命名法。</font>

一個變數名由一個<mark>**前綴名稱+名稱**</mark>所組成

前綴名稱有助於記憶變數的類型和用途，緊跟着的就是程式設計師選擇的任何名稱。
![](https://i.imgur.com/DcswV62.png)

在<font color="blue">匈牙利命名法</font>中，前綴代表了變數的<font color="red">實際資料類型</font>

- **l**AccountNum：前綴是一個長整數（"longInteger"）
- **arru8**NumberList：前綴是一個無符號 8 位元整型陣列（"arru8"）;

在<font color="blue">匈牙利應用命名法</font>中，前綴代表了變數的<font color="red">目的，或者說它做了什麼</font>

- **rw**Position：變數代表"row"。
- **us**Name：變數代表一個非安全字串（"unsafeString"），需要在使用前處理。

[**常用的前綴表格**]：
![](https://i.imgur.com/2XSW7Zu.png)

### 駝峰式命名法（Camel case）

當<font color="blue">變數名</font>和<font color="blue">函式名稱</font>是由二個或多個單字連結在一起，而構成的唯一識別字時，利用「駝峰式大小寫」來表示，可以增加變數和函式的可讀性。

**小駝峰命名方式（lower camel case）：**

**第一個單字**以<font color="red">小寫字母</font>開始，**第二個單字**的首字<font color="red">字母大寫</font>

例如：**f**irst**N**ame、**l**ast**N**ame。

### 帕斯卡命名法（Pascal）

帕斯卡命名法又叫<font color="blue">大駝峰命名法（lower camel case）</font>。

原理和駝峰命名一樣，只是每一個**單字的首字母**都採用<font color="red">大寫字母</font>，例如：**F**irst**N**ame、**L**ast**N**ame
