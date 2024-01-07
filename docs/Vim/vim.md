---
tags: [Vim筆記]
sidebar_position: 7
---
# Vim 快捷鍵 
![](vim.png)
## 基礎設定
* Vim中默認是 <font color="red">Normal </font>模式，需要輸入<font color="red"> i </font> 才能進入insert 模式
* insert 模式下，退出鍵 <font color="red">Escape </font>回到 normal 模式
* normal 模式下 <font color="green">hjkl </font>分別為 <font color="green">左下上右</font>
## 常用快捷鍵
- w : 下一個單字的第一個字元
- b : 前一個單字的第一個字元
- e : 本身單字的最後一個字元
- gg : 移到首
- `G` → 到最後一行
- shift + ^ : 移動到行首
- shift + $ : 移動到行尾 
- : 行數 ⇒ 移動到第幾行
- zz ⇒ 儲存並且退出
- `fa` → 到下一個為a的字元處，你也可以fs到下一個為s的字元。
- `Fa` → 到上 一個為a的字元處，你也可以Ｆs到上一個為s的字元。
- • `/pattern` → 搜尋 `pattern` 的字串（如果搜尋出多個匹配，可按n鍵到下一個 , N鍵上一個）
- o : **在下面插入行以進入輸入模式**
- O : **在上面插入行以進入輸入模式**
- I : **轉到行的開頭並進入輸入模式**
- A : **轉到行尾並進入輸入模式**
- rM : **用“ M”代替光標上的字符(單一個字元)**
- Rvim :  **在多字符替換模式下輸入“ vim”**
- `x`→ 刪當前游標所在的一個字元
- v ⇒ (視覺化的選擇)
- e ⇒ 全選到單字字尾
- `y` → 從這裡開始拷貝
- `P` → 貼上在當前位置之後
- p → 貼上在當前位置之前
 `dd` → 刪除當前行，並把刪除的行存到剪貼簿裡
- `yy` → 拷貝當前行當行於 `ddP`

- :e 空格 test.js⏎ :  **創建一個名為“ test.js”的新文件**
- :f 空格 othr.js⏎ ：**將文件名更改為“ othr.js”**

## 資料參考
https://blog.csdn.net/weixin_42815609/article/details/113674255

