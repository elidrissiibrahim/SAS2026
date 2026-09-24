//Binary Search with Index
let ids = [2, 7, 11, 15, 23, 34, 45, 58, 61, 70];
let start = 0;
let end = ids.length - 1;
let intab;
function fuondbyindex(index) {
    while (start < end) 
    {
        if (ids[start] == index)
        {
            intab = start;
        break;
        }
        else if(ids[end] == index)
        {
            intab = end;
            break;
        }
        else 
            intab = -1;
        start++;
        end--;
    }
    return intab;
}
console.log(fuondbyindex(23));