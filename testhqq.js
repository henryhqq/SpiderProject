var now = new Date();
var jsdom = require('jsdom');//相当于java的import

jsdom.env('http://www.cnbeta.com/', [
    'http://code.jquery.com/jquery-1.8.0.min.js'
],
    function (errors, window) {
        console.log('本页有', window.$('div .newslist').length, '篇文章');
        var time = new Date().getTime() - now.getTime();
        console.log('耗时：' + time + 'ms');
    });