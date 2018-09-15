//常用输入处理方法
function splitParse(input, separator) {
    var _arr = _split(input, separator)
    return _parse(_arr)
}

function _split(input, separator) {
    if (separator !== "") {
        separator = separator || /\s+/
    }
    var input = input.trim()
    return input.split(separator)
}

function _parse(_arr) {
    for (var i = 0; i < _arr.length; i++) {
        _arr[i] = parseInt(_arr[i])
    }
    return _arr
}
