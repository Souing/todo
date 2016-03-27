/**
 * Created by Yuan on 2016/3/27.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/zrytodo');
//定义一个模型并导出
module.exports = mongoose.model('todo',mongoose.Schema({
    text:String
}))