//Sort by Descending Selection + Trade Counter
let temperatures = [22, 19, 30, 15, 28, 17, 25];
let Numbswap = 0;
function Descending() {
    for (let i = 0; i < temperatures.length; i++) {
        for (let j = i+1; j < temperatures.length; j++) {
            if (temperatures[i] < temperatures[j]) {
                let swap = temperatures[j];
                temperatures[j] = temperatures[i];
                temperatures[i] = swap;
                Numbswap++;
            }
        }
    }
    console.log(Numbswap);
    return temperatures;
}
console.log(Descending())