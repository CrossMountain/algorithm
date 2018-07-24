//找出所有和为S的连续正数序列
function FindContinuousSequence(sum) {
    var first = 2
    var last = Math.floor(Math.sqrt(2 * sum))

    var res = [] //存放结果

    for (var n = first; n <= last; n++) { //n为数的个数
        if (isEven(n)) { //n为偶数
            if (sum % n === n / 2) { //平均值的小数部分为0.5
                helper()
            }
        } else { //n为奇数
            if (sum % n === 0) { //平均值的小数部分为0
                helper()
            }
        }
    }

    function helper() { //置数
        var item = []
        var a1 = sum / n - (n - 1) / 2
        var an = a1 + n - 1

        for (var j = a1; j <= an; j++) {
            item.push(j)
        }
        res.unshift(item)
    }
    return res
}