var _input = `
0 2 1
`

var _reg_ = /.+/gm

function readline() {
    return _reg_.exec(_input)[0]
}