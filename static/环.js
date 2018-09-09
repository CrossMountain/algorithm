//n个人围成一个圈，编号 0到n-1
//第m个人出列，下一轮 从接下来的人开始
//求最后那个人的编号 
function LastRemainingNum(n, m) {
    if (n === 1) {
        return 0
    } else if (n === 0) {
        return -1
    } else {
        return (LastRemainingNum(n - 1, m) + m) % n
    }
}