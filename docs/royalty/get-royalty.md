---
id: get-royalty
title: ロイヤリティの情報を取得する
sidebar_position: 2
---

# ロイヤリティの情報を取得する

### GET
~~~
nfts/{contractId}/{TokenId}/royalty 
~~~
contractId Target contract ID  
tokenId TokenID of the NFT to get.

### Responses
200
~~~
{
  "id": 1,
  "tokenUri": "string"
}
~~~
400 
Invalid input
