function reOrderArray(array)
{
    var res=array.slice(0)
    res.forEach(function(item,index){
        if(isEven(item)){
            
        }
    })
}
function isEven(n) {
    return n % 2 === 0 ? true : false
}
function switchPos(arr,left,right){
    var temp=arr[left]
    arr[left]=arr[right]
    arr[right]=temp
}