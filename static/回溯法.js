//判断在一个矩阵中是否存在一条包含某字符串所有字符的路径
//每一步可以在矩阵中向左，向右，向上，向下移动一个格子
//格子不能被重复进入
function hasPath(matrix, rows, cols, path) {
    var flag = new Array(matrix.length); //存储哪些格子被走过
    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            if (hasPathHelper(matrix, rows, cols, i, j, path, 0, flag))
                return true;
        }
    }
    return false;
}

function hasPathHelper(matrix, rows, cols, i, j, path, k, flag) {
    if (i < 0 || i >= rows || j < 0 || j >= cols) { //索引越界
        return false
    }
    var index = i * cols + j; //对应原字符中的索引 
    //原字符中的这个索引位置 与 当前所寻找的值不同，
    //或当前的值已经被进入过   
    if (matrix[index] != path[k] || flag[index] == 1)
        return false;
    //已经是路径的末尾
    if (k == path.length - 1) return true;
    //值相同，未被进入过，非末尾，标记当前索引为进入过，继续寻找周围的字符
    flag[index] = 1;
    if (hasPathHelper(matrix, rows, cols, i - 1, j, str, k + 1, flag) ||
        hasPathHelper(matrix, rows, cols, i + 1, j, str, k + 1, flag) ||
        hasPathHelper(matrix, rows, cols, i, j - 1, str, k + 1, flag) ||
        hasPathHelper(matrix, rows, cols, i, j + 1, str, k + 1, flag)) {
        return true;
    }
    //周围没有找到，说明当前值不应该进入
    flag[index] = 0;
    return false;
}