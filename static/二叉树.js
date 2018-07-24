function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

//前序遍历
function preOrderTraversal(root) {
    if (!root) return []
    if (!root.left && !root.right) return [root.val]
    return [root.val].concat(preOrderTraversal(root.left)).concat(preOrderTraversal(root.right))
}

//中序遍历
function inOrderTraversal(root) {
    if (!root) return []
    if (!root.left && !root.right) return [root.val]
    return inOrderTraversal(root.left).concat([root.val]).concat(inOrderTraversal(root.right))
}
/** 不得有重复元素
 * 由前序和中序序列，构建二叉树 (递归版本)
 * @param  {Array} pre 前序遍历
 * @param  {Array} vin 中序遍历
 * @return {Object}     [根节点]
 */
//层序遍历{1,2,3,4,5,6,7}
//var pre = [1, 2, 4, 5, 3, 6, 7]
//var vin = [4, 2, 5, 1, 6, 3, 7]  //构成向左往右数的1到7
//二叉搜索树:
//var pre=[4,2,1,3,6,5,7]
//var vin=[1,2,3,4,5,6,7]
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


//输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
function HasSubtree(pRoot1, pRoot2) {

    if (!pRoot1 || !pRoot2) return false
    var flag = false

    if (pRoot1.val === pRoot2.val) { //根结点相同，则可能相同，深层次比较
        flag = doesTree1HaveTree2(pRoot1, pRoot2)
    }
    if (!flag) { //若找到了就不再找了
        flag = HasSubtree(pRoot1.left, pRoot2) //左
    }
    if (!flag) { //若找到了就不再找了
        flag = HasSubtree(pRoot1.right, pRoot2) //右
    }
    return flag
}

function doesTree1HaveTree2(p1, p2) {
    if (p2 === null) return true //p2树为空，遍历完成
    if (p1 === null) return false
    if (p1.val !== p2.val) return false
    //到达这里的条件是上面的判断都不成立
    return doesTree1HaveTree2(p1.left, p2.left) && doesTree1HaveTree2(p1.right, p2.right)
}


//操作给定的二叉树，将其变换为源二叉树的镜像。
function Mirror(root) {
    if (!root) return null
    var tempLeft = root.left
    var tempRight = root.right

    root.left = tempRight
    root.right = tempLeft
    Mirror(root.left)
    Mirror(root.right)
    return root
}


//层序遍历 
function PrintFromTopToBottom(root) {
    if (!root) return []

    var quese = [] //队列
    quese.push(root)
    var output = []

    while (quese.length) {
        var temp = quese.shift() //首结节
        output.push(temp.val)
        if (temp.left) quese.push(temp.left) //往后放
        if (temp.right) quese.push(temp.right)
    }
    return output
}

//输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
function Convert(rootNode) {
    if (rootNode === null) return null
    if (!rootNode.left && !rootNode.right) return rootNode

    var left = Convert(rootNode.left)

    var p = left
    while (p !== null && p.right !== null) {
        p = p.right
    }
    if (left !== null) {
        p.right = rootNode
    }
    rootNode.left = p
    var right = Convert(rootNode.right)
    if (right !== null) {
        right.left = rootNode

    }
    rootNode.right = right
    return left !== null ? left : rootNode
}

//输入一棵二叉树，求该树的深度
function TreeDepth(pRoot) {
    if (!pRoot) return 0

    var queue = []
    var nextQueue = []
    var depth = 0

    queue.push(pRoot)

    while (queue.length) {
        var temp = queue.shift()
        if (temp.left) nextQueue.push(temp.left)
        if (temp.right) nextQueue.push(temp.right)

        if (queue.length === 0) {
            queue = nextQueue
            nextQueue = []
            depth++
        }
    }
    return depth
}


//是不是平衡二叉树
function IsBalanced_Solution(pRoot) {
    // 非平衡二叉树的深度为-1
    function getDepth(root) {     
        if (root === null) return 0;     
        var left = getDepth(root.left);  //遍历直至叶结点 
        if (left === -1) return -1;     
        var right = getDepth(root.right);     
        if (right === -1) return -1;   

        if (Math.abs(left - right) > 1)   { //从下往上返回
            return -1 //不平衡则返回1
        } else {
            return 1 + Math.max(left, right)
        }
    }

    return getDepth(pRoot) !== -1
}


//输入一颗二叉树的跟节点和一个整数，
//打印出二叉树中结点值的和为输入整数的所有路径
function FindPath(root, expectNumber) {
    var res = []
    helper(root, expectNumber, [], res)
    return res
}

function findPathHelper(root, num, path, all) {
    if (root === null) return
    if (!root.left && !root.right) {
        if (num === root.val) {
            path.push(root.val)
            all.push(path)
        }
        return
    }
    path.push(root.val)
    //必须复制数组的拷贝
    helper(root.left, num - root.val, path.slice(), all)
    helper(root.right, num - root.val, path.slice(), all)
}