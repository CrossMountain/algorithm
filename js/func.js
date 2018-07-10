
//生成一个数组
//指定长度，每个数范围[left,right],是否排序
function generatorArray(len,left,right,sortFlag){
    var res=[]
    for(var i=0;i<len;i++){
        res.push(getRandom(left,right))
    }
    return sortFlag?res.sort():res
}

//[left,right]
function getRandom(left,right){
    var temp=(right-left)*Math.random()+left
    return Math.ceil(temp)
}


var test=generatorArray(10,2,8,true)
console.log(test)