function swap (str, a, b) {
    let copie = str[a]
    str[a] = str[b]
    str[b] = copie
}

function bubble_sort(str) {
for (let i = 0; i < str.length; i +=1) {
    if (str[i] > str[i+1]) {
        swap(str, i, i+1)
        i = -1;
    }
}
return str
}

console.log(bubble_sort([3, 0, 2, 6, 10, 15, -10 , 2, 50, 4, -2, -40, 7]))