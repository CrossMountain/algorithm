/*
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
 */
function minNumberInRotateArray(rotateArray) {
    var len = rotateArray.length
    if (len === 0) return 0

    var left = 0
    var right = len - 1
    var mid = Math.floor((left + right) / 2)

    while ((right - left) > 1) {
        if (rotateArray[left] <= rotateArray[mid]) {
            left = mid
        }
        if (rotateArray[mid] <= rotateArray[right]) {
            right = mid
        }
        mid = Math.floor((left + right) / 2)
    }
    if (left === right) {
        return rotateArray[0]
    } else {
        return rotateArray[right]
    }
}

//二分查找,返回第一个索引,没有则返回-1
function binarySearch(sortedArray, value) {
    var first = 0
    var last = sortedArray.length
    var mid = Math.floor((first + last) / 2)

    while (first < last) {
        var cur = sortedArray[mid]

        if (cur < value) {
            first = mid + 1
            mid = Math.floor((first + last) / 2)
        } else if (cur >= value) {
            last = mid
            mid = Math.floor((first + last) / 2)
        }
    }
    if (sortedArray[mid] === value) return mid
    return -1
}