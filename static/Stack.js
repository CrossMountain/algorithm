//拥有min方法的栈
//应用一个辅助栈，
//压的时候，如果A栈的压入比B栈压入大，B栈不压，，，，小于等于，AB栈同时压入，
//出栈，如果，AB栈顶元素不等，A出，B不出。
var arr = []
var minStack = []

function push(node) {
    arr.push(node)

    if (minStack.length === 0) {
        minStack.push(node)
    } else {
        var temp = minStack.pop()
        if (node <= temp) {
            minStack.push(temp)
            minStack.push(node)
        } else {
            minStack.push(temp)
        }
    }
}

function pop() {
    var popValue = arr.pop()

    var temp = minStack.pop()
    if (popValue > temp) {
        minStack.push(temp)
    }
}

function min() {
    var res = minStack.pop()
    minStack.push(res)
    return res
}


//输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。
//假设压入栈的所有数字均不相等。
//请判断第二个序列是否为该栈的弹出顺序
function IsPopOrder(pushV, popV) {
    var arr = [] //辅助的栈
    for (var i = 0; i < pushV.length; i++) { //遍历压栈顺序
        arr.push(pushV[i])
        if (pushV[i] === popV[j]) { //判断栈顶元素是不是出栈顺序的第一个元素
            while (popV[j] === arr[arr.length - 1] && arr.length !== 0) { //相等以后开始出栈,直到不相等
                arr.pop()
                j++
            }
        }
    }
    if (arr.length === 0) return true
    return false //如果辅助栈还不为空，说明弹出序列不是该栈的弹出顺序。
}

//给定一个合法的括号字符串，进行移除操作
//1. 移除序列s中第一个左括号
//2. 移除序列s中任意一个右括号.保证操作之后s还是一个合法的括号序列
//总共有多少种移除方案
//实则在问，有多少种将括号配对的方案
function parenthesisPairing(str) {
    var arr = str.split('')
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] == ')') {
            var str = "";
            if (i == '1') { //  arr[0] 与arr[1] 必定配对
                str += arr.substring(2);
                return i * getRes(str);
            }
            //寻找到第一个右括号
            //则这个右括号必然与其左边位置的左括号配对，则删除开始部分的任何
            //一个左括号，均为匹配
            str = arr.slice(0, i - 1) + arr.slice(i + 1, arr.length);
            return i * getRes(str);
        }
    }
    if (arr == "") {
        return 1;
    }
}


//是否为合法括号序列
function isLegalBracket(str) {
    if (!str || str.length === 0) return false
    var stack = []
    var res = true

    for (var i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            stack.push("(")
        } else {
            if (stack.length !== 0) {
                stack.pop()
            } else {
                res = false
                break
            }
        }
    }
    return res
}