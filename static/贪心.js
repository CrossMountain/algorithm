//一个数，可以无限次分割，求最后所有分割而成的数中能被3整除的数量最多。
//https://blog.csdn.net/qq_41730082/article/details/80984316
function numDivBy3(n) {
    //连续3位数中必然有一个
    var str = n.toString()

    var outN = 0
    var data = [1, 0, 0] //连续三位子串的累加和中，余数为0，1，2出现次数
    var num = 0

    for (var i = 0; i < str.length; i++) {
        num = num + parseInt(str[i])
        var remain = num % 3
        if (data[remain]) {  //累加和为3的倍数，重置
            outN++
            data[1] = 0
            data[2] = 0
        } else {
            data[remain] = 1  //累加和除以3 余1或余2
        }
    }
    return outN
}