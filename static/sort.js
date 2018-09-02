//冒泡排序,从小到大
function bubbleSort(arr){
    //if (!arr || arr.length === 0) return []
    var len = arr.length
    var sorted = false //这次扫描过程中，是否出现逆序对＝＝＝是否有序

    var temp = len - 1
    var last = len - 1 //这次扫描过程中, 最后一个逆序对的位置, 则在其之后的位置必定有序    
    //var num=0  //交换总次数
    //var reversePair=0  //逆序对数量
    for (var j = 0; j < len - 1; j++) { //交换次数最多为 len-1
        if (sorted) break //一旦没有逆序对,退出
        sorted = true //初始认为每次扫描都没有逆序对

        for (var i = 0; i < last; i++) { //在从0到最后一个逆序对之间进行交换
            //num++  交换次数
            if (arr[i] > arr[i + 1]) {
                temp = i //暂时存储最后一个逆序对的位置
                sorted = false //一旦出现逆序对,将标志位置 false
                exchange(arr, i, i + 1)
                //reversePair++
            }
        }
        last = temp //一次扫描完成了,将最后一个逆序对更新
    }
}


//归并排序
function mergeSort(arr) {
    mergeSortHelper(arr, 0, arr.length)
}

//归并划分
//[start,end)
function mergeSortHelper(arr, start, end) {
    if (end - start < 2) return
    var mid = (start + end) >> 1

    mergeSortHelper(arr, start, mid)
    mergeSortHelper(arr, mid, end)
    merge(arr, start, mid, end)
}
//归并合并
function merge(arr, start, mid, end) {
    var leftLen = mid - start;
    var tempArr = arr.slice(start, mid); //将左侧的区间复制出来备用

    // tempArr[i]  ,i:[0,leftLen)
    // arr[j] , j: [mid,end)
    for (var i = 0, j = mid; i < leftLen;) { // tempArr未消耗完
        if (j < end) { //arr右边未完
            if (tempArr[i] < arr[j]) {
                arr[i + j - leftLen] = tempArr[i];
                i++;
            } else {
                arr[i + j - leftLen] = arr[j];
                j++;
            }
        } else { //arr右边消耗完
            arr[i + j - leftLen] = tempArr[i]; //将备用的剩余区间,依次拼在后面
            i++;
        }
    }
}


//输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个
//若ab > ba 则 a > b，
//若ab < ba 则 a < b，
//若ab = ba 则 a = b；
function PrintMinNumber(numbers) {
    numbers.sort(function(n1, n2) {
        var temp1 = parseInt(n1.toString() + n2.toString())
        var temp2 = parseInt(n2.toString() + n1.toString())
        return temp1 > temp2 ? 1 : -1
    })
    return numbers.join("")
}

//输入一个数组,求出这个数组中的逆序对的总数
//核心：归并排序并在合并时，计算逆序对


function quickSort(arr) {
    if (arr.length === 0) return []
    if (arr.length === 1) return [arr[0]]
    quickSortHelper(arr, 0, arr.length - 1)
    return arr
}
//原地快排 ,将arr[start,end] 排序完毕，无返回值 
function quickSortHelper(arr, start, end) {
    if (start >= end) return
    var base = arr[start]

    var left = start
    var right = end
    while (left < right) {
        //find less than base
        while (arr[right] >= base && left < right) {
            right--
        }
        //find bigger than base
        while (arr[left] <= base && left < right) {
            left++
        }
        if (left < right) { //未相遇
            swap(arr, left, right)
        } else { //相遇
            swap(arr, left, start)
        }
    }
    quickSortHelper(arr, start, left - 1)
    quickSortHelper(arr, left + 1, end)
}