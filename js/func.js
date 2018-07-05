function MoreThanHalfNum_Solution(arr)
{
    var obj={}
    var res=0
    arr.forEach(function(item,index){

        if(obj[item]){
        }else{
            obj[item]=0
        }
        obj[item]++

        if(obj[item]>arr.length/2){
            res=item
        }
    })

    return res
}

var test=[1,2,3,2,2,2,5,2,4]
var res=MoreThanHalfNum_Solution(test)
console.log(res)