var _input = `
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