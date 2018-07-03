//输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
function NumberOf1(n) {
    var temp 
    var res = 0

    for (var i = 0; i < 32; i++) {   //用32位保存
        temp = n | 1 //末尾强制为１
        if (temp === n) {
            res++
        }
        n = n >> 1
    }
    return res
}