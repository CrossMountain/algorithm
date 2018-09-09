//技巧: 前后设想一个哨兵节点
function ListNode(x) {
    this.val = x;
    this.next = null;
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
//输入一个链表，输出该链表中倒数第k个结点。
function FindKthToTail(head, k) {
    if (!head) return null
    if (k <= 0) return null

    var second = head
    //然后再让第二个指针走(k-1)步，到达第k个节点
    for (var i = 0; i < k - 1; i++) {
        if (second.next) {
            second = second.next
        } else {
            return null
            break
        }
    }
    //两个指针同时往后移动
    var first = head
    while (second.next) {
        second = second.next
        first = first.next
    }
    return first
}


//链表反转
function ReverseList(head) {

    if(!head) return null

    var first=null
    var second=head
    var third=second.next

    while(third){
        second.next=first
        first=second
        second=third
        third=third.next
    }
    second.next=first
    return second
}

//输入两个单调递增的链表，输出两个链表合成后的链表，满足单调不减规则。
function Merge(pHead1, pHead2) {
    if (!pHead1) return pHead2
    if (!pHead2) return pHead1

    var cur = {}   //当前节点
    var head = cur  //头节点

    while (pHead1 && pHead2) {  //取较小值出来
        if (pHead1.val <= pHead2.val) {
            cur.next = pHead1
            pHead1 = pHead1.next
        } else {
            cur.next = pHead2
            pHead2 = pHead2.next
        }
        cur = cur.next
    }
    if (pHead1) {  //剩下的链表进行拼接
        cur.next = pHead1
    } else {
        cur.next = pHead2
    }
    return head.next  //头的next
}
//输入两个链表，找出它们的第一个公共结点。
function FindFirstCommonNode(pHead1, pHead2) {
    if (!pHead1 || !pHead2) return null
    //获取两个链表的长度
    var one = pHead1
    var two = pHead2
    var oneLen = 0
    var twoLen = 0
    while (one.next) {
        one = one.next
        oneLen++
    }
    while (two.next) {
        two = two.next
        twoLen++
    }

    var dis = 0
    var shorter
    var longer
    //让长的链表向后走两个链表的长度差
    if (oneLen >= twoLen) {
        dis = oneLen - twoLen
        shorter = pHead2
        longer = pHead1
    } else {
        dis = twoLen - oneLen
        shorter = pHead1
        longer = pHead2
    }
    for (var i = 0; i < dis; i++) {
        longer = longer.next
    }
    //然后再一起走
    while (longer !== shorter) {
        longer = longer.next
        shorter = shorter.next
    }
    return longer
}

//删除该链表中重复的结点
//1->2->3->3->4->4->5 处理后为 1->2->5
function deleteDuplication(pHead) {
    if (!pHead) return null
    var tempHead = {  //新建一个头结点，保证第一个与第二个不同
        val: "a",
        next: pHead
    }

    var before = tempHead
    var cur = tempHead.next

    while (cur&&cur.next) {   //因为往下需要比较 cur.val与cur.next.val，所以其必须存在
        if (cur.val !== cur.next.val) {
            cur = cur.next
            before = before.next
        } else {
            var cmp = cur.val
            while (cur && cur.val === cmp) {
                cur = cur.next
            }
            before.next = cur
        }
    }
    return tempHead.next
}


//输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个指针指向任意一个节点），
//返回结果为复制后复杂链表的head
function Clone(pHead) {
    if (!pHead) return null
    var pCur = pHead
    //在原链表中对所有节点进行复制，并插入相应节点的后面
    while (pCur) {
        var copy = {
            label: pCur.label,
            next: pCur.next,
            random: null
        }
        pCur.next = copy
        pCur = pCur.next.next
    }

    pCur = pHead
    //校正新节点的random指针
    while (pCur) {
        if (pCur.random) {  //random可以指向null
            var copy = pCur.next
            copy.random = pCur.random.next
        }
        pCur = pCur.next.next
    }

    //拆分
    var newHead = pHead.next
    var newCur = newHead
    var pCur = pHead

    while (pCur && pCur.next) {
        pCur.next = pCur.next.next
        if (newCur.next) {
            newCur.next = newCur.next.next
        }
        pCur = pCur.next
        newCur = newCur.next

    }
    return newHead
}