//输入中的 中文空格不能被 split!!
var _input = `
6 5
XBGBX
YBBYB
BGGXX
XYYBG
XYBGG
YYXYX
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
