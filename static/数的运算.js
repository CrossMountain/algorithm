//两个数的最大公倍数
function commonMultiple(a, b) {
    return a * b / GCD(a, b)
}
//多个数的最大公倍数
function arrCommonMultiple(arr) {
    return arr.reduce(function(last, cur) {
        return commonMultiple(last, cur)
    })
}
//两个数的最大公约数
function GCD(a, b) {
    if (a < b) return GCD(b, a)
    if (b === 0) return a
    if (a >= b) return GCD(b, a % b)

}
//多个数的公约数
function arrGCD(arr) {
    return arr.reduce(function(last, cur) {
        return GCD(last, cur)
    })
}