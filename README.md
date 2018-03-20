# get-XDcookie
[![npm version](https://img.shields.io/badge/npm-0.0.1-brightgreen.svg)](https://www.npmjs.com/package/get-xd-cookie)

爬虫模拟odecker4登录，获取cookie

## Install
```javascript
npm install --save get-XDcookie
```

## Usage
```javascript
const getXDcookie = require('get-XDcookie');

getXDcookie({
    phone: 'your phone',
    token: 'your token'
}).then((cookie) => {
    console.log(cookie);
}).catch((error) => {
    console.log(error);
})
```
