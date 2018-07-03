//是否为偶数
function isEven(n) {
    return n % 2 === 0 ? true : false
}

//数组交换位置
function swapPos(arr, left, right) {
    var temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
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
