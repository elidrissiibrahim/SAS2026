//Challenge 05 — Managing a bank account
let prompt = require ('prompt-sync')();
let account = {
    owner: "Tayeb",
    balance: 5000,
    type: "saving"
};
function bankaccount()
{
    let choix = 0;
    console.log("1.your profil")
    console.log("2.Deposit money")
    console.log("3.Withdraw money")
    choix = +prompt("your choix :");
    if (choix == 1)
    {
        console.log("==================YOUR PROFIIL==================")
        console.log("name :",account.owner);
        console.log("your balance :",account.balance);
        console.log("type :",account.type);
        console.log("=================================================")
        bankaccount();
    }
    else if (choix == 2)
    {
        deposet();
    }
    else if (choix == 3)
    {
        Withdraw();
    }
    else 
        console.log("this option is not avaliabel !!!")
}

function deposet()
    {
    console.log ("your balance :", account.balance);
    let deposit = +prompt("deposet :")
    account.balance += deposit;
    bankaccount();
    }


    function Withdraw()
    {
    console.log ("your new balance : ", account.balance);
    let Withdraw = prompt("Withdraw money :");
    if (Withdraw > account.balance)
        console.log("your balance is lower than your withdraw !!");
    else 
        account.balance -= Withdraw;
    bankaccount();
}
bankaccount()