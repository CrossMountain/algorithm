function splitParse(str, separator) {
    separator=separator||" "
    var arr = str.split(separator)
    for (var i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i])
    }
    return arr
}
