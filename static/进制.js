//获取指定进制中最高位或最低位有效数字的详情
function findBitOne(num, type, dec) {

    var str = num.toString(dec)
    var weight

    if (type === 'high') {
        value = str[0]
        weight = str.length - 1
    } else if (type === 'low') {
        value = str[str.length - 1]
        weight = 0
    } else {
        throw ("type只能为high和low")
    }
    return {
        value: parseInt(value),
        dec: dec,
        weight: weight,
    }
}

//输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
function NumberOf1(n) {
    var temp 
    var res = 0

    for (var i = 0; i < 32; i++) {   //用32位保存
        temp = n | 1 //末尾强制为１
        if (temp === n) {
            res++
        }
        n = n >> 1
    }
    return res
}

//一个整型数组里除了两个数字之外，其他的数字都出现了两次。找出这两个只出现一次的数字。
//出现两次的数字全部在异或中抵消掉了。
//把原数组分为两个子数组。在每个子数组中，包含一个只出现一次的数字，而其它数字都出现两次。
function FindNumsAppearOnce(array) {
    var originXorResult = 0 //所有数异或结果
    array.forEach(function(item, index) {
        originXorResult = originXorResult ^ item
    })

    // originXorResult 或 Math.pow(2,n),不变的是最低位
    var originLastOne = findBitOne(originXorResult,'low')

    var arr1 = [] //最低位与originLastOne相同
    var arr2 = [] //最低与originLastOne不同

    array.forEach(function(item, index) {
        if (item & originLastOne) {
            arr1.push(item)
        } else {
            arr2.push(item)
        }
    })

    var res = []
    arr1.forEach(function(item, index) {
        res[0] = res[0] ^ item
    })
    arr2.forEach(function(item, index) {
        res[1] = res[1] ^ item
    })

    return res
}


//[start,end]区间内，某个数以二进制表示
//1的个数最多者，且最小者
function minLonelyNumber(start, end) {
    var result = start
    // x|x+1是将x的最后一个二进制0变为1
    while ((result | (result + 1)) <= end) {
        result |= result + 1;
    }

    return result
}