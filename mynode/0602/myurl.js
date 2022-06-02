const url = require('url');
const queryString = require('querystring');

const link = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=mywork';

let curUrl = url.parse(link);
console.dir(curUrl);
console.log('query : ' + curUrl.query);

let curStr = url.format(curUrl);
console.log(curStr);

let params = queryString.parse(curUrl.query);
console.log('검색어 : ' + params.query);