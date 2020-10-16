function sort_by_insertion(str) {
    for (let i = 1; i < str.length; i += 1) {
        let copie = str[i]
        let a = i - 1
        while (a >= 0 && str[a] > copie) {
            str[a + 1] = str[a]
            a -= 1
        }
        str[a + 1] = copie
    }
    return str
}
console.log(sort_by_insertion([3, 0, 2, 6, 10, 15, -10 , 2, 50, 4, -2, -40, 7]));