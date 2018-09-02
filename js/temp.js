//https://blog.csdn.net/yang20141109/article/details/51284237
function two(x, k) {
    var tmp = x;
    //判断x的二进制是否为0
    var index1 = 1;
    //判断y的二进制是否为1
    var index2 = 1;
    //当index2小于等于k时，进入循环
    while (index2 <= k) {
        //判断当前tmp某一位是否为0,如果是0,再次判断k相对应的是否为1
        if ((index1 & tmp) == 0) {
            //如果k对应的位是1,则tmp 更新为tmp = tmp | index1。
            if (index2 & k) {
                tmp = tmp | index1;
            }
            //index2向左移动一位
            index2 <<= 1;
        }
        //index1向左移动一位
        index1 <<= 1;
    }
    return (tmp - x);
}
//https://blog.csdn.net/zhuqiuhui/article/details/51288547
function two(x, k) {
    var temp = 0,
        remain = 1
    while (k > 0) {
        if (x % 2 != 0) {
            while (x % 2 != 0) {
                remain = remain * 2
                x = Math.floor(x / 2)
            }
        }
        if (k % 2 != 0)
            temp = temp + remain

        remain = remain * 2
        x = Math.floor(x / 2)
        k = Math.floor(k / 2)
    }
    return temp
}


//最大升序和
//https://blog.csdn.net/qq_37763006/article/details/70245856
function five(arr) {
    var i, j, max
    var a = arr //输入数组  
    var b = [],
        temp;
    var t = a.length

    b[0] = a[0];
    for (i = 1; i < t; i++) {
        b[i] = a[i];
        temp = 0;
        for (j = 0; j < i; j++) {
            if (a[i] > a[j]) {
                if (temp < b[j])
                    temp = b[j];
            }
        }
        b[i] += temp;
    }
    for (i = 0, max = 0; i < t; i++)
        if (max < b[i])
            max = b[i];

    return max
}