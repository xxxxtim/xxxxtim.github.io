---
tags: [Git]
---
# 回復舊版本並更新遠端

1. 顯示 commit 紀錄
```bash title="[Terminal]" showLineNumbers
git reflog
```
2. 將 commit id 替換成要回復的版本，完成本機端舊版本更新
```bash title="[Terminal]" showLineNumbers
git reset --hard "commit ID"
```
3. 更新遠端資料庫(強制更新)
```bash title="[Terminal]" showLineNumbers
git push -f
```
## git 回復被改壞的文件
有時候我們可能會不小心把文件改壞了，想要回復到之前的版本。這時候可以使用 git checkout 指令來回復文件。
恢復到最後一次提交的改動：

1.需要注意的是，如果該文件已經 add 到暫存區，下面的指令就不適用了
```bash title="[Terminal]" showLineNumbers
git reset HEAD -- + 需要取消暂存的文件名
```
2.使用 checkout 指令回復文件
```bash title="[Terminal]" showLineNumbers
git checkout -- + 需要恢復的文件名
```