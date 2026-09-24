//Bubble Sorting, Ascending
let notes = [12, 5, 19, 3, 27, 8, 14];
function sort()
{
    for(let i =0; i < notes.length ; i++)
    {
        j = 0;
        for( let j = 0 ; j < notes.length ; j++)
        {
                if (notes[i] < notes[j])
                {
                    let swap = notes[j];
                    notes[j] = notes[i];
                    notes[i]=swap;
                }
        }
    }
    return notes;
}
console.log(sort())