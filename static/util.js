//是否为偶数
function isEven(n) {
    return n % 2 === 0 ? true : false
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
function arrayToListNode(arr){   
    var head=null
    for(var i=arr.length-1;i>=0;i--){
        var temp=head
        head={}
        head.val=arr[i]
        head.next=temp
    }
    return head
}

//数组中的极值与位置 
//左开右闭  [left,right)
function getLimitInArray(arr, left, right) {
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
            max.index = i
        }
    }
    return {
        min: min,
        max: max
    }
}



export default var util={
    isEven:isEven,
    swapPos:swapPos,
    arrayToListNode:arrayToListNode,
    getLimitInArray:getLimitInArray
}