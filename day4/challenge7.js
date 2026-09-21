function obtenirHeureActuelle()
{
    let date = new Date();  
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    let time = `${hour}:${min}:${sec}`
    return time;

}
console.log(obtenirHeureActuelle());