//只包含质因子2、3和5的数称作丑数
function getUglyNumber(index) {        
    if (index < 7) return index;        
    var res = []        

    res[0] = 1        
    var t2 = 0 //对应的 t2之前所有的丑数乘2小于当前最大的丑数
    var t3 = 0
    var t5 = 0       
    for (var i = 1; i < index; ++i) {            
        res[i] = Math.min(res[t2] * 2, res[t3] * 3, res[t5] * 5);            
        if (res[i] === res[t2] * 2) t2++;   //如果是由乘2得到,则t2++          
        if (res[i] === res[t3] * 3) t3++;            
        if (res[i] === res[t5] * 5) t5++;        
    }        
    return res[index - 1];    
}

//给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。
 function maxInWindows(arr, size)    {     
     if (!arr || arr.length === 0) return []
     if (size < 1) return []

     var res = []    

     var queue = [] //双端队列，递减
          
     for (var i = 0; i < arr.length; i++) {       
         if (queue.length !== 0 && i - size >= queue[0]) { //头部已不在当前窗口之中
             queue.shift(); //移除
         }       
         //新增加的值从队尾开始比较，把所有比他小的值丢掉
         //保存队列中最后一个数是刚来的这个数
         while (queue.length !== 0 && arr[queue[queue.length - 1]] <= arr[i]) {
             queue.pop();
         }    
         //  为什么可以比刚来元素更小的值 ？
         //因为队列至少还有刚来的元素。且保证了只保存当前窗口的信息，且递递   
         queue.push(i); 

         if (i - size + 1 >= 0) { //至少遍历了一个窗口长度后
             res.push(arr[queue[0]]);
         }     
     }     
     return res;   
 }