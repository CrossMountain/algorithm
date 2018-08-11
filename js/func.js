//n个0，m个1，组成字符串。按字典序排序，求排在第k位的数
function kthOfn0m1(n, m, k) {
    //generator dp
    var dp = []
    dp[0] = []
    dp[0][0] = 0
    for (var i = 1; i <= n; i++) {
        dp[i] = []
        dp[i][0] = 1
    }
    for (var i = 1; i <= m; i++) {
        dp[0][i] = 1
    }
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= m; j++) {
            //i个0，j个1所构成的所有字符串的个数 
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }

    var str = ''
    if (k > dp[n][m]) return false //不可能 取到

    while (k > 0 && m > 0) {
        if (dp[n][m - 1] > k) { //尝试把1放在最高痊，失败。最高位为0
            str += 0
            n--
        } else if (dp[n][m - 1] === k) { //1在最高位，且紧跟其后的位数全为1 
            str += 1
            k = 0
            m--
        } else { //最高位为1
            str += 1
            k = k - dp[n - 1][m]
            m--
        }
    }
    //补位
    for (var i = 0; i < m; i++) {
        str += 1
    }
    for (var i = 0; i < n; i++) {
        str += 0
    }
    return str
}

var arr = readline().split(" ")
for (var i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i])
}

var out = main(arr[0], arr[1], arr[2])
if (out) {
    console.log(out)
} else {
    console.log("impossiable")
}