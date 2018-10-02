//输入中的中文空格不能被 split!!

/*********所有输入请放入这个变量之中************/
var _input = `
2 0
3,4,5
6,7,8
`
/*********************/

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