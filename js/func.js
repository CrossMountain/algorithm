//给定一个数组A,请构建一个数组,
//其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。
function multiply(array) {
    var res = []
    res[0] = 1
    //计算下三角连乘
    for (var i = 1; i < array.length; i++) {
        res[i] = res[i - 1] * array[i - 1]
    }
    //计算上三角连乘
    var next = 1
    for (var i = array.length - 2; i >= 0; i--) {
        next *= array[i + 1]
        res[i] *= next
    }
    return res
}