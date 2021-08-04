---
id: get-nft
title: NFTの情報を取得する
sidebar_position: 2
---

# NFTの情報を取得する

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
  "payee": "string",
  "commission": 100
}
~~~
400 
Invalid input




