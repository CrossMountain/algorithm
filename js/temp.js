//4
// var k = readline()
// k = parseInt(k)
// var input = readline().split(" ")
// for (var i = 0; i < input.length; i++) {
//     input[i] = parseInt(input[i])
// }
// var out = main(k, input[0], input[1], input[2], input[3])
// var out = main(205, 1, 92, 4, 92)
// console.log(out)
function main(k, a, x, b, y) {
    var data = []
    for (var m = 0; m <= x; m++) {
        for (n = 0; n <= y; n++) {
            if (m * a + n * b === k) {
                data.push([m, n])
            }
        }
    }
    var res = 0
    data.forEach(function(item) {
        var temp = cmn(x, item[0]) * cmn(y, item[1]) % 1000000007
        res += temp
        res = res % 1000000007
    })
    return res

}

//Cmn,无序排序
function cmn(m, n) {
    var top = 1
    var bottom = 1
    if (m < 2 * n) {
        n = m - n
    }

    for (var i = m - n + 1; i <= m; i++) {
        top *= i
    }
    for (var i = 2; i <= n; i++) {
        bottom *= i
    }
    return top / bottom
}


//5
function main(task, machine) {
    //价值的排序
    task.sort(function(a, b) {
        return (200 * a[0] + 3 * a[1] - 200 * b[0] - 3 * b[1])
    })

    machine.sort(function(a, b) {
        return (200 * a[0] + 3 * a[1] - 200 * b[0] - 3 * b[1])
    })

    var number = 0
    var res = 0

    for (i = task.length - 1; i >= 0; i--) {

        for (var j = 0; j < machine.length; j++) {
            var x = task[i][0]
            var y = task[i][1]
            var z = machine[j][0]
            var w = machine[j][1]

            if (x <= z && y <= w) {
                res = res + 200 * x + 3 * y
                number++
                machine.splice(j, 1)
                break
            }
        }

    }
    console.log(number, res)

}

var nm = readline().split(" ")
var n = parseInt(nm[0])
var m = parseInt(nm[1])

var machine = []
var task = []

for (var i = 0; i < n; i++) {
    var temp = readline().split(" ")
    var arr = [parseInt(temp[0]), parseInt(temp[1])]
    machine.push(arr)
}

for (var i = 0; i < m; i++) {
    var temp = readline().split(" ")
    var arr = [parseInt(temp[0]), parseInt(temp[1])]
    task.push(arr)
}


main(task, machine)


