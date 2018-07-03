//技巧: 前后设想一个哨兵节点
function ListNode(x) {
    this.val = x;
    this.next = null;
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