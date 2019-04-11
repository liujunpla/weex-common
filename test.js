'use strict';

// console.log(module)
// module.exports = {
//     print: function () {
//         console.log(12345)
//     }
// }
// console.log(module); //你会看到Module中的exports对象已经有了print()方法

import {
    utils
} from './index'
// const utils = require('./utils/util');

// const len = utils.GetLength('中华人民共和国')
const len = utils.GetLength('中华人民共和国')
console.log(`字符串真实长度 = ${len}`)