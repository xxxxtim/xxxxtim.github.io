---
tags: [Git]
---
# Git 常用指令

以下是一些 Git 的常用指令，幫助你更有效地管理版本控制：
```bash title="[Terminal]" showLineNumbers
# 初始化 Git 儲存庫
git init    
````

```bash title="[Terminal]" showLineNumbers
# 克隆遠端儲存庫
git clone <repository_url>
```
```bash title="[Terminal]" showLineNumbers
# 檢查儲存庫狀態
git status
```
```bash title="[Terminal]" showLineNumbers
# 添加檔案到暫存區
git add <file_name>
```
```bash title="[Terminal]" showLineNumbers
# 添加所有更改的檔案到暫存區(只限此目錄下以及子目錄)
git add . 
```
```bash title="[Terminal]" showLineNumbers
# 添加所有更改的檔案到暫存區(不只包含當下目錄，真正的所有變更檔案))
git add -all 
```
```bash title="[Terminal]" showLineNumbers
# 提交更改
git commit -m "commit message"
```
```bash title="[Terminal]" showLineNumbers
# 推送更改到遠端儲存庫
git push origin <branch_name>
```
```bash title="[Terminal]" showLineNumbers
# 從遠端儲存庫拉取更改
git pull origin <branch_name>
```
```bash title="[Terminal]" showLineNumbers
# 查看提交歷史
git log
```
```bash title="[Terminal]" showLineNumbers
# 創建新分支
git branch <branch_name>
```
```bash title="[Terminal]" showLineNumbers
# 切換分支
git checkout <branch_name>
```
```bash title="[Terminal]" showLineNumbers
# 合併分支
git merge <branch_name>
```
```bash title="[Terminal]" showLineNumbers
# 刪除分支
git branch -d <branch_name>
```
```bash title="[Terminal]" showLineNumbers
# 查看遠端儲存庫
git remote -v
```