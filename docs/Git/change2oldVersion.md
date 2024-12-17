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
