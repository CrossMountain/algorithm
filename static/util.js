//是否为偶数
function isEven(n) {
    return n % 2 === 0 ? true : false
}

//生成一个数组
//指定长度，每个数范围[left,right],是否排序
function generatorArray(len, left, right, sortFlag) {
    var res = []
    for (var i = 0; i < len; i++) {
        res.push(getRandom(left, right))
    }
    return sortFlag ? res.sort() : res
}
//[left,right]
function getRandom(left, right) {
    var temp = (right - left) * Math.random() + left
    return Math.ceil(temp)
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

//将数组转化为链表
function arrayToListNode(arr) {
    var head = null
    for (var i = arr.length - 1; i >= 0; i--) {
        var temp = head
        head = {}
        head.val = arr[i]
        head.next = temp
    }
    return head
}

//数组[left,right)中的极值与位置 
function getLimitInArray(arr, left, right) {
    left = left || 0
    right = right || arr.length
    if (left >= right) return null
    var min = {
        val: arr[0],
        index: 0
    }
    var max = {
        val: arr[0],
        index: 0
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
//获取二进制中最高位或最低位1所构成的十进制数
function findBitOne(num, type) {
    var index = 0
    var temp = num
    if (type === 'high') {
        while (temp !== 1) {
            temp = temp >> 1
            index++
        }
    } else if (type === 'low') {
        while ((temp & 1) === 0) { //最后1位为0
            temp = temp >> 1
            index++
        }
    } else {
        throw ("type只能为high和low")
    }
    return Math.pow(2, index)
}

//输入数组
//输出反转后的数组
function reverseArray(arr){
    if(!arr||arr.length===0) return []
    var res=[]
    for(var i=arr.length-1;i>=0;i--){
        res.push(arr[i])
    }
    return res
}


