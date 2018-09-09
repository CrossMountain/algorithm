/** 
 * //输入一系列的区间，找出最多的 不重叠区间的 数量 
 * @param  {Array} _arr  [[1,4],[6,9]]
 * @return {Number}     [description]
 */
function getMaxNumOfNonOverlap(_arr) {
    _arr.sort(function(a, b) {
        return a[1] - b[1]
    })
    var end = _arr[0][1]
    var count = 1
    for (var i = 1; i < _arr.length; i++) {
        if (_arr[i][0] >= end) {
            end = _arr[i].end
            count++
        }
    }
    return count
}