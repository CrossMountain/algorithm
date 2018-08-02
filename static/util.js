//是否为偶数
function isEven(n) {
    return n % 2 === 0 ? true : false
}

//x属于 [start,end)
function belongToSection(x, start, end) {
    return x >= start && x < end
}
//[left,right)
function getRandom(left, right) {
    var temp = (right - left) * Math.random() + left
    return Math.floor(temp)
}

//数组或字符串交换位置
//字符串 返回新字符串
//数组  在原始数组上修改
function swapPos(arrOrStr, i, j) {
    var arrFlag = true

    if (typeof(arrOrStr) === "string") {
        var arrOrStr = arrOrStr.split("")
        arrFlag = false
    }
    var temp = arrOrStr[i]
    arrOrStr[i] = arrOrStr[j]
    arrOrStr[j] = temp
    if (!arrFlag) return arrOrStr.join('')
    return arrOrStr
}



//数组[left,right)中的极值与位置 
function getLimitInArray(arr, left, right) {
    left = left || 0
    right = right || arr.length
    if (left >= right) return null
    var min = {
        val: arr[left],
        index: left
    }
    var max = {
        val: arr[left],
        index: left
    }
    for (var i = left; i < right; i++) {
        if (arr[i] > max.val) {
            max.val = arr[i]
            max.index = i
        }
        if (arr[i] < min.val) {
            min.val = arr[i]
            min.index = i
        }
    }
    return {
        min: min,
        max: max
    }
}

//获取 num 在二维数组中 占第几行和第几列,从0计数
//超过数组范围则返回[]
function getRowCol(num, rows, cols) {
    var j = num & cols
    var i = (num - j) / cols
    if (i < rows && i >= 0) {
        return [i, j]
    } else {
        return []
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

//数组去除空的头与尾
function removeNullHeadTail(arr) {
    if (!arr || arr.length === 0) return
    if (!arr[0]) arr.shift()
    if (!arr[arr.length - 1]) arr.pop()
}

