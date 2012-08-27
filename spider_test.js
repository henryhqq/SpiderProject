//var now = new Date();
//var jsdom = require('jsdom');//相当于java的import
//
//jsdom.env('http://zh.wikipedia.org/wiki/Wikipedia:%E5%88%86%E9%A1%9E%E7%B4%A2%E5%BC%95', [
//    'http://code.jquery.com/jquery-1.8.0.min.js'
//],
//    function (errors, window) {
//        console.log('本页有', window.$('div .post').length, '篇文章');
//        var time = new Date().getTime() - now.getTime();
//        console.log('耗时：' + time + 'ms');
//    });
// Print all of the news items on hackernews
var jsdom = require('jsdom');

jsdom.env({
    html: 'http://news.ycombinator.com/',
    scripts: [
        'http://code.jquery.com/jquery-1.5.min.js'
    ],
    done: function(errors, window) {
        var $ = window.$;
        console.log('HN Links');
        $('td.title:not(:last) a').each(function() {
            console.log(' -', $(this).text());
        });
    }
});