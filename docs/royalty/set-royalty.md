---
id: set-royalty
title: ロイヤリティを設定する
sidebar_position: 1
---

# ロイヤリティを設定する

### POST
~~~
nfts/{contractId}/tokenId/royalty
~~~
contractId Target contract ID  
tokenId TokenID of the NFT to get.

### Request body
~~~
{
  "payee": "string",
  "commission": 100
}
~~~

### Responses
200
~~~
{
  "txHash": "string"
}
~~~
400  
Invalid input

