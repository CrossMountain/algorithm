 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
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
    
    if (pRoot1.val === pRoot2.val) {  //根结点相同，则可能相同，深层次比较
        flag = doesTree1HaveTree2(pRoot1, pRoot2)
    }
    if (!flag) { //若找到了就不再找了
        flag = HasSubtree(pRoot1.left, pRoot2)  //左
    }
    if (!flag) {//若找到了就不再找了
        flag = HasSubtree(pRoot1.right, pRoot2)  //右
    }
    return flag
}
function doesTree1HaveTree2(p1, p2) {
    if (p2 === null) return true  //p2树为空，遍历完成
    if (p1 === null) return false
    if (p1.val !== p2.val) return false
    //到达这里的条件是上面的判断都不成立
    return doesTree1HaveTree2(p1.left, p2.left) && doesTree1HaveTree2(p1.right, p2.right)
}


//操作给定的二叉树，将其变换为源二叉树的镜像。
function Mirror(root)
{
    if(!root) return null
    var tempLeft=root.left
    var tempRight=root.right

    root.left=tempRight
    root.right=tempLeft
    Mirror(root.left)
    Mirror(root.right)
    return root
}


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