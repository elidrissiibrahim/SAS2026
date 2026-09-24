let nombres = [4, 8, 15, 16, 23, 42];

function cherchnum(number) {
    intable = false;
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] === number) {
            intable = true;
            break;
        }
    }
    return intable;
}
console.log(cherchnum(29))

