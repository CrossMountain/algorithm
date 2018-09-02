//常用输入处理方法
function splitParse(str, separator) {
    var arr = _split(str, separator)
    return _parse(arr)
}

function _split(str, separator) {
    separator = separator || " "
    return str.split(separator)
}

function _parse(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i])
    }
    return arr
}

