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
    if (b === 0) return a
    if (a >= b) return GCD(b, a % b)
}
//多个数的公约数
function arrGCD(arr) {
    return arr.reduce(function(last, cur) {
        return GCD(last, cur)
    })
}

//是否是质数
function isPrimeNumber(num) {
    //自己保证传入的是正整数
    if (num === 2 || num === 3) return true
    if (num % 6 !== 1 && num % 6 !== 5) return false
    var temp = Math.floor(Math.sqrt(num))
    for (var i = 5; i <= temp; i = i + 2) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}


//是否为非负整数 
function isNotNegativeInteger(num) {
    if (typeof(num) !== "number") return false
    if (num < 0) return false
    if (num % 1 !== 0) return false
    return true
}

//大数相加
function addBigNumber(a, b) {
    var res = '',
        upFlag = 0;
    a = a.toString().split('');
    b = b.toString().split('');
    while (a.length || b.length || upFlag) {
        var temp1 = a.pop()
        var temp2 = b.pop()
        if (temp1) {
            upFlag += parseInt(temp1)
        }
        if (temp2) {
            upFlag += parseInt(temp2)
        }
        res = upFlag % 10 + res;
        if (upFlag > 9) {
            upFlag = 1
        } else {
            upFlag = 0
        }
    }
    return res.replace(/^0+/, '');
}