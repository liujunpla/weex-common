'use strict';

export function GetLength(str) {
    //<summary>获得字符串实际长度，中文2，英文1</summary>
    //<param name="str">要获得长度的字符串</param>
    let realLength = 0,
        len = str.length,
        charCode = -1;
    for (let i = len - 1; i >= 0; i--) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) {
            realLength += 1;
        } else {
            realLength += 2;
        }
    }
    return realLength;
}

/*
//module.exports = 
function GetLength(str) {
    // const GetLength = function (str) {
    //<summary>获得字符串实际长度，中文2，英文1</summary>
    //<param name="str">要获得长度的字符串</param>
    let realLength = 0,
        len = str.length,
        charCode = -1;
    for (let i = len - 1; i >= 0; i--) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) {
            realLength += 1;
        } else {
            realLength += 2;
        }
    }
    return realLength;
}

module.exports = {
    GetLength,
    name: 'utils'
}
*/