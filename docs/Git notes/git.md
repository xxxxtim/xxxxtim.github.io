---
tags: [Git]
---
# 開發過程中 HEAD跑掉怎麼辦 detached HEAD？
**前情提要 :**

在開方過程中，原本在 main 分支上的有三個 commit，由新到舊分別為Ａ,B,C (目前主要開發在Ａ)，可是某一天我想回到commit B的時間點去拿一些資料進行開發，因此我執行了
```bash title="[Terminal]" showLineNumbers
$ git checkout B
```
當我拿完東西，我回到原本commit A 繼續開發並且push時，發現 Terminal 跳出告警：
```bash title="[Terminal]" showLineNumbers
$ git checkout A
$ git add .
$ git commit -m "Add something to A"
$ git push
```
```bash title="[Terminal]" showLineNumbers
fatal: You are not currently on a branch.
To push the history leading to the current (detached HEAD)
state now, use
git push origin HEAD:<name-of-remote-branch>
```
**Detached HEAD 討論：**

主要是HEAD 回到先前狀態時，git 會預設 user 打算離開目前分支，並開一條新的分支從舊的 commit 點分岔出來繼續開發。

但是偏偏 git 並不會自己定義新的分支，導致 HEAD 沒有指向任何分支的窘境。這就叫 <font color="#EE7700">detached HEAD</font>，就算重新 checkout 回 commit A ，狀況還是存在。

**解決方法如下**
```bash title="[Terminal]" showLineNumbers
$ git log --oneline --graph --decorate

* d239enc (HEAD) change the node version // commit B
* d1907cd (origin/main, main) compile error cry cry //commit A 
* 8d384ae change the favicon // commit C 
* 0ac097d change the site name
```
觀察 HEAD 指向的地方，在原本 master 的位置分岔出一條未定義的分支。

要讓這條分支能落在 main 上，首先，給不小心岔出來的路徑配上一個正式分支，我暫且把它命名為 oops，並且切換到 oops 分支上。
```bash title="[Terminal]" showLineNumbers
$ git branch oops d239enc
$ git checkout oops
```
上述指令相當於
```bash title="[Terminal]" showLineNumbers
$ git checkout -b oops
```
接著執行 rebase 指令，把 oops 接到 main 之後，可以清楚地看到 HEAD 轉移到 commit B 上

```bash title="[Terminal]" showLineNumbers
$ git log --oneline --graph --decorate

* d239enc (HEAD -> oops) change the node version // commit B
* d1907cd (origin / main, main ) compile error cry cry //commit A 
* 8d384ae change the favicon // commit C 
* 0ac097d change the site name
```
接著切回 main 並且執行 merge ，merge 指令能讓 main 走到跟新分支一樣的位置

```bash title="[Terminal]" showLineNumbers
$ git checkout master
$ git merge oops
```
```bash title="[Terminal]" showLineNumbers
$ git log --oneline --graph --decorate

* d239enc (HEAD -> main , oops) change the node version // commit B
* d1907cd (origin / main, main ) compile error cry cry //commit A 
* 8d384ae change the favicon // commit C 
* 0ac097d change the site name
```
最後砍掉剛剛開的新分支並且 push 到遠端

```bash title="[Terminal]" showLineNumbers
$ git branch -d oops
$ git push
```

結果如下：

```bash title="[Terminal]" showLineNumbers
$ git log --oneline --graph --decorate

* d239enc (HEAD -> main , origin / main) change the node version 
* d1907cd compile error cry cry 
* 8d384ae change the favicon 
* 0ac097d change the site name
```

參考資料如下 ：

https://git-scm.com/book/zh-tw/v2/%E4%BD%BF%E7%94%A8-Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E5%92%8C%E5%90%88%E4%BD%B5%E7%9A%84%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95



