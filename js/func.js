var res = 0

function movingCount(threshold, rows, cols) {
    helper(threshold,0,0,rows,cols)
    return res
}

//i,j当前行列
//rows,cols总行列
function helper(threshold, i, j, rows, cols) {
    if (i < 0 || i > rows) return
    if (j < 0 || j > cols) return
    var temp = getDigitalSum(i) + getDigitalSum(j)
    if (temp <= threshold) {
        res++
        helper(threshold, i++, j, rows, cols)
        helper(threshold, i, j++, rows, cols)
    }
}

//获取 正整数 的数位和
//45=>4+5,return 9
function getDigitalSum(num) {
    var temp = Math.abs(num).toFixed(0)
    var res = 0

    while (temp) {
        var last = temp % 10
        res += last
        temp = (temp - last) / 10
    }
    return res
}

var out = movingCount(10, 1, 100)
console.log(out)