//输入中的 中文空格不能被 split!!
var _input = `
1234 4321 2341 1432 3412 2143 4123 3214
`

var _reg_ = /.+/gm
//nowcoder
function readline() {
    return _reg_.exec(_input)[0]
}

//acmcoder
function read_line() {
    return _reg_.exec(_input)[0]
}
var print = console.log.bind(console)


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