//数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
function MoreThanHalfNum_Solution(arr) {
    var current
    var times = 0
//目标数 超过数组长度的一半，对数组同时去掉两个不同的数字，到最后剩下的一个数就是该数字
    arr.forEach(function(item, index) {
        if (times === 0) { //不相同的数成对出现
            current = item
            times = 1
        } else if (item === current) {
            times++
        } else {
            times--
        }
    })
    //验证
    var count = 0
    arr.forEach(function(item, index) {
        if (item === current) count++
    })

    if (count > arr.length / 2) return current
    return 0
}

//连续子向量的最大和
function FindGreatestSumOfSubArray(arr) {
    //maxIndexI（i）：以array[i]为末尾元素的子数组的和的最大值，子数组的元素的相对位置不变
    //maxIndexI（i）=max（F（i-1）+array[i] ， array[i]）
    var maxIndexI = arr[0]
    var res = maxIndexI  //结果res=max（res，maxIndexI（i））
    for (var i = 1; i < arr.length; i++) {
        var nextF = Math.max(arr[i], maxIndexI + arr[i])
        res = Math.max(res, nextF)
        maxIndexI = nextF
    }
    return res
}