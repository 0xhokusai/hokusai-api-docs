---
id: mint-nft
title: NFTを発行する
sidebar_position: 1
---

# NFTを発行する

### POST
~~~
nfts/{contractId}/mint 
~~~
contractId Target contract ID  
tokenId TokenID of the NFT to get.

### Request body
~~~
{
  "tokenUri": "string"
}
~~~

### Responses
200
~~~
{
  "tokenUri": "string"
}
~~~
400  
Invalid input
