// function swap pour échanger les nombres
function swap (str, a, b) {
    let copie = str[a]
    str[a] = str[b]
    str[b] = copie
}

function bubble_sort(str) {
    //boucle pour parcourir le tableau
for (let i = 0; i < str.length; i +=1) {
    //si pas bon, envoi dans la fonction swap
    if (str[i] > str[i+1]) {
        swap(str, i, i+1)
        //i = -1 : pour relancer la boucle au début(pas 0 a cause de l'accrémentation de la boucle)
        i = -1;
    }
}
return str
}

console.log(bubble_sort([3, 0, 2, 6, 10, 15, -10 , 2, 50, 4, -2, -40, 7]))
