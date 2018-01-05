var Website = require('../models/website');

exports.index_get = function(req, res, next) {
    res.render('index', { title: 'Express' });
}

exports.index_post = function(req, res, next) {
    console.log(req.body);
    var searchText = req.body.searchText;
    var searchType = req.body.searchType;

    // khai báo hàm này trước mới sử dụng được
    var callback_WebsiteTim = function(err, data) {
        console.log(data);
        if (err) {
            console.log(err);
            res.send(err);
        };
        var model = {
            websites: data
        }
        res.render('website_results', model);
    }

    if (searchType == 'website') {
        console.log('post search website');
        Website.tim(searchText, callback_WebsiteTim);
    } else if (searchType == 'article') {

    } else {
        res.send('Please choose a type');
    }


}