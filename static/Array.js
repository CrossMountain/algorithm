//生成一个数组
//指定长度，每个数范围[left,right],是否排序
function generatorArray(len, left, right, sortFlag) {
    var res = []
    for (var i = 0; i < len; i++) {
        res.push(getRandom(left, right))
    }
    //[left,right]
    function getRandom(left, right) {
        var temp = (right - left) * Math.random() + left
        return Math.ceil(temp)
    }
    return sortFlag ? res.sort() : res
}

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

//输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，
//如果有多对数字的和等于S，输出两个数的乘积最小的。 
//左右逼近,差值最大,则乘积最小
function FindNumbersWithSum(array, sum) {
    if (!array || array.length === 0) return []

    var left = 0 //最小数
    var right = array.length - 1 //最大数

    var res=[]
    while (left < right) {
        if (array[left] + array[right] === sum) {
            res.push([array[left], array[right]])
            break
        } else if (array[left] + array[right] < sum) {
            left++
        } else {
            right--
        }
    }
    return res
}

//5个数,范围[0-13],可重复,0代表任意数
//问是否满足顺子
function IsContinuous(numbers)
{
    if(!numbers||numbers.length===0) return false
    var arr=numbers
    arr.sort(function(a,b){  //排序
        return a-b
    })
    var numberOfZero=0  //0的个数

    var distance=0  //间隔

    for(var i=0;i<arr.length;i++){
        if(arr[i]===0){
            numberOfZero++
        }else{
            if(arr[i-1]===0){

            }else if(i!==0){
                var gain=arr[i]-arr[i-1]
                if(gain===0) return false //出现对子
                distance+=(gain-1)
            }
        }
    }

    if(numberOfZero>=distance) return true
    return false
}


//一个长度为n的数组里的所有数字都在0到n-1的范围内
//请找出数组中任意一个重复的数字
function duplicate(numbers, arr) {
    var len = numbers.length

    var flag = false
    for (var i = 0; i < len; i++) {
        var real = numbers[i] % len  //原来的数值
        numbers[real]+=len  //存储起来
        if(numbers[real]>=2*len){  //有过两次存储
            flag=true
            arr[0]=real
            break
        }
    }
    return flag
}