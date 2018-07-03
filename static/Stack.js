//拥有min方法的栈
//应用一个辅助栈，
//压的时候，如果A栈的压入比B栈压入大，B栈不压，，，，小于等于，AB栈同时压入，
//出栈，如果，AB栈顶元素不等，A出，B不出。
var arr = []
var minStack = []

function push(node) {
	arr.push(node)

	if (minStack.length===0) {
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
	if(popValue>temp){
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
    var arr = []//辅助的栈
    for (var i = 0; i < pushV.length; i++) {  //遍历压栈顺序
        arr.push(pushV[i])
        if (pushV[i] === popV[j]) {//判断栈顶元素是不是出栈顺序的第一个元素
            while (popV[j] === arr[arr.length - 1] && arr.length !== 0) {//相等以后开始出栈,直到不相等
                arr.pop()
                j++
            }
        }
    }
    if (arr.length === 0) return true
    return false  //如果辅助栈还不为空，说明弹出序列不是该栈的弹出顺序。
}
