function VerifySquenceOfBST(sequence) {
    if (sequence.length === 0) return true
    var root=sequence[sequence.length-1]
    var lastIndex=0
    for(var i=0;i<sequence.length-1;i++){
        if(sequence[i]>root){
            lastIndex=i
            break
        }
    }
    var left=sequence.slice(0,lastIndex)
    var right=sequence.slice(lastIndex,sequence.length-1)
    for(var i=0;i<right.length;i++){
        if(right[i]<right[0]){
            return false
        }
    }
    return VerifySquenceOfBST(left)&&VerifySquenceOfBST(right)
}


    
var arr=[1,3,2]
var res=VerifySquenceOfBST(arr)
console.log(res)