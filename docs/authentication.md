---
id: authentication
title: 認証
sidebar_position: 2
---

# 認証　

Hokusai API では全てのリクエストに認証が要求されます。  
URLの key パラメータに API Key を指定することで認証を行います。

~~~
https://api.hokusai.app/v1/nfts/{contractAddress}/mint?key={apiKey} 
~~~
