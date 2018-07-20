//获取进制中最高位或最低位有效数字所构成的十进制数
function findBitOne(num, type, dec) {
    var index = 0
    var temp = num
    if (type === 'high') {
        while (temp >= dec) {
            temp = Math.floor(temp / dec)
            index++
        }
    } else if (type === 'low') {
        while ((temp & 1) === 0) { //最后1位为0
            temp = Math.floor(temp / dec)
            index++
        }
        temp=temp%dec
    } else {
        throw ("type只能为high和low")
    }
    return temp*Math.pow(dec, index)
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
