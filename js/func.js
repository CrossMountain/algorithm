var data = readline()
var list = []

while (data) {
    var temp = data.split(" ")
    list.push(temp)
    data = readline()
}


for (var i = 0; i < list.length; i++) {
    var offset = Number(list[i][0])
    var n = Number(list[i][1])
    var L1 = Number(list[i][2])
    var L2 = Number(list[i][3])

    var start1, end1, start2, end2

    if (offset < L1) { //offset在左边
        start1 = offset

        if (offset + n < L1) {
            end1 = start1 + n
            start2 = 0
            end2 = 0
        } else if (offset + n < L1 + L2) {
            end1 = L1
            start2 = 0
            end2 = offset + n - L1
        } else {
            end1 = L1
            start2 = 0
            end2 = L2
        }
    } else if (offset < L1 + L2) { //offset在右边
        start1 = L1
        end1 = L1
        start2 = offset - L1

        if (offset + n < L1 + L2) {
            end2 = start2 + n
        } else {
            end2 = L2
        }
    } else { //offset出去了
        start1 = L1
        end1 = L1
        start2 = L2
        end2 = L2
    }
    console.log(start1, end1, start2, end2)
}

console.log(1)
console.log(2)