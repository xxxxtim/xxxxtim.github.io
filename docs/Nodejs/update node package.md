# 更新專案中的 npm 相依套件
在專案中我們常常遇到<font color="red">使用的套件是否要更新？？</font>
有時候套件的更新可以使專案提升效能或是解決安全性問題。

首先我們可以先確認一下專案底下目前套件的版本以及可是使用的版本，再來進行更新。
```bash title="[Terminal]" 
# 顯示可以專案版本號
npm outdated
```
![npm outdated](image.png)
如圖所示，顯示的版本好三種，Current(目前版本)/Wanted（建議版本） / Latest（最新版） ，根據所需更新要使用的版本號。

使用 `ncu(npm-check-updates)`來更新
```bash title="[Terminal]" 
#全域安裝在電腦上
npm install -g npm-check-updates 
#執行更新
ncu-u
```
最後再使用 `npm outdated` 來確認 package 是否有更新即可，如下圖所示。
![update package result](image-1.png)

資料來源
https://docs.npmjs.com/cli/v8/commands/npm-outdated