const axios = require('axios');
const cheerio = require('cheerio');
const querystring = require('querystring');

const LOGIN_URL = 'https://odocker4.dian.so';
const USER_AGENT = 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1';
const LOGIN_API = 'http://odocker4.dian.so/leo/1.0/h5/login';
let t = (new Date()).getTime()
const XDcookie = ({ phone, token }) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: LOGIN_API + '?t=' + t +'&data={"mobile":"' + phone + '","token":"' + token +'"}',
      headers: {
        'User-Agent': USER_AGENT,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Origin': 'https://odocker4.dian.so',
        'Referer': 'http://odocker4.dian.so/login',
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then((response) => {
      if (response.headers['set-cookie']) {
        const cookie = response.headers['set-cookie'].join(' ;');
        resolve(cookie);
      } else {
        return Promise.reject(new Error("no cookie"))
      }

    }).catch((error) => {
      console.log(error);
    });
  })
};
module.exports = XDcookie;