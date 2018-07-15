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