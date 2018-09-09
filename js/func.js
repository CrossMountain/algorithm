function EntryNodeOfLoop(pHead) {
	if (pHead === null) return null

	var slow = pHead
	var fast = pHead

	var flag = false //是否包含环

	while (fast&&fast.next) {
		slow = slow.next

		fast = fast.next.next
		if (fast === slow) {
			flag=true
			break
		}
	}

	if (!flag) return null

	var cur = pHead

	while (cur !== slow) {
		cur = cur.next
		slow = slow.next
	}
	return cur
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
    return sortFlag ? res.sort(function(last, cur) {
        return last - cur
    }) : res
}

var arr=generatorArray(10,1,10)
var list=arrayToListNode(arr)
var out=EntryNodeOfLoop(list)
console.log(out)
// var str = readline()

// var input = readline().split(" ")
// for (var i = 0; i < input.length; i++) {
//     input[i] = parseInt(input[i])
// }

// var out = main(input)
// console.log(out)
