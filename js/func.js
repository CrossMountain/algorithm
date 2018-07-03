//层序遍历 
function PrintFromTopToBottom(root) {
    if(!root) return []

    var quese = []  //队列
    quese.push(root)
    var output = []

    while (quese.length) {
        var temp=quese.shift()  //首结节
        output.push(temp.val)
        if(temp.left) quese.push(temp.left) //往后放
        if(temp.right) quese.push(temp.right)
    }
    return output
}

var quese1 = [1, 2, 4, 5, 3, 6, 7]
var quese2 = [4, 2, 5, 1, 6, 3, 7]

function reConstructBinaryTree(pre, vin) {
    if (pre.length === 0 || vin.length === 0) return null

    var headIndexInVin = vin.indexOf(pre[0])
    //左子树的前序与中序
    var leftPre = pre.slice(1, headIndexInVin + 1)
    var leftVin = vin.slice(0, headIndexInVin)
    //右子树的前序与中序
    var rightPre = pre.slice(headIndexInVin + 1)
    var rightVin = vin.slice(headIndexInVin + 1)

    return {
        val: pre[0],
        left: reConstructBinaryTree(leftPre, leftVin),
        right: reConstructBinaryTree(rightPre, rightVin)
    }
}

var tree = reConstructBinaryTree(quese1, quese2)
var res = PrintFromTopToBottom(tree)
console.log(res)