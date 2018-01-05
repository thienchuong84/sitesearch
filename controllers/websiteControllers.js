var Website = require('../models/website');

exports.add_get = function(req, res, next) {
    // res.send('websites add');
    res.render('add_website.pug', { title: "Add Website" });
}

exports.add_post = function(req, res, next) {
    // console.log(req.body.title);
    var web = new Website();
    web.title = req.body.title;
    web.url = req.body.url;
    web.description = req.body.description;

    // chú ý chổ này, nếu dùng web.them thì sẽ báo "web.them is not a function"
    // vậy chứng tỏ them này ko phải thuộc object như bên .Net , và them này đc dùng như 1 static
    Website.them(web, function callback(err, website) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.redirect('/');
    });
}