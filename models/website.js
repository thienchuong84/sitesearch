var mongoose = require('mongoose');

// website Schema
var Schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});




var Model = module.exports = mongoose.model('Website', Schema);

// method addWebsite, tham số truyền vào là obj web và function callBack
module.exports.them = function(objWebsite, callBack) {
    // vì obj Website khởi tạo từ mongoose.Schema , vì thế dùng đc các hàm của nó
    Model.create(objWebsite, callBack);
}

module.exports.tim = function(searchText, callback) {
    console.log('var searchText in method tim: ' + searchText);
    // Model.find({ 'description': { "$regex": ".*" + searchText + "*." } }, 'title url description', callback);

    // var query = Model.find({
    //     'description': { "$regex": ".*" + searchText + "*." }
    // });
    // query.select('title url description');
    // query.limit(10);
    // query.sort({ title: -1 });
    // query.exec(callback);

    // cách này ok nhất, câu lệnh theo link http://mongoosejs.com/docs/2.7.x/docs/query.html
    var query = Model.find();
    query.or([
        { 'title': { "$regex": ".*" + searchText + "*." } },
        { 'url': { "$regex": ".*" + searchText + "*." } },
        { 'description': { "$regex": ".*" + searchText + "*." } },
    ]);
    query.select('title url description');
    query.limit(10);
    query.sort({ title: -1 });
    query.exec(callback);
}