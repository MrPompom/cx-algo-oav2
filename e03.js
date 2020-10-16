function swap (str, a, b) {
    let copie = str[a]
    str[a] = str[b]
    str[b] = copie
}

function sort_by_selection(str) {
    let arr = []
    for (let i = 0; i < str.length; i +=1) {
    let smallest = i
    for (let x = i + 1; x < str.length; x += 1) {
        if (str[smallest] > str[x]) {
            smallest = x
        }
    }
    if (smallest !== i) {
        swap(str, i, smallest)
    }
    }
    return str
}
console.log(sort_by_selection([3, 0, 2, 6, 10, 15, -10 , 2, 50, 4, -2, -40, 7]));