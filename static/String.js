import util from './util.js'

//输入一个字符串,按字典序打印出该字符串中字符的所有排列。
//去重的全排列就是从第一个数字起，每个数分别与它后面非重复出现的数字交换。
function Permutation(str) {
    if (str === null || str.length === 0) return []
    var list = []
    PermutationHelper(str, 0, list)
    return list.sort()
}

function PermutationHelper(str, i, list) {
    if (i === str.length - 1) {
        list.push(str)
    } else {
        for (var j = i; j < str.length; j++) {
            if (isNeedSwap(str, i, j)) {
                str = util.swapPos(str, i, j) //固定第i位后,
                PermutationHelper(str, i + 1, list) //再去交换[i+1,)之后
                str = util.swapPos(str, i, j) //还原
            }

        }
    }
}

//没有重复,返回TRUE
//[left,right-1]中,是否有与arr[right]相同的
function isNeedSwap(arr, left, right) {
    var flag = true
    for (var i = left; i < right; i++) {
        if (arr[i] === arr[right]) {
            flag = false
            break
        }
    }
    return flag
}

//在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,
//并返回它的位置, 如果没有则返回 -1.
function FirstNotRepeatingChar(str) {
    var obj = {}
    var order = []

    for (var i = 0; i < str.length; i++) {
        var char=str[i]
        if (!obj[char]) { //不存在,即第一次出现
            obj[char] = 1 //次数为1
            order.push(char)
        } else if (obj[char] !== -1) { //再次出现
            deleteValueInArray(order, char)
            obj[char] = -1
        } else { //obj[char]===-1   //出现多次

        }
    }
    var first=order[0]
    return str.indexOf(first)
}

function deleteValueInArray(arr, value) {
    var index = arr.indexOf(value)
    arr.splice(index, 1)
}