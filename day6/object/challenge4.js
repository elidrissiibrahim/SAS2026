//Challenge 04 — Salary Calculator
let employee = {
    firstName: "Sara",
    lastName: "Amrani",
    salary: 7000,
    bonus: 1000,
    absenceDays: 2
};
//day of absence.200 Dh
console.log ("salary : ",employee.salary)
console.log("bonus : ",employee.bonus)
let penalty = 200 * employee.absenceDays
console.log("penalty :",penalty)
let salarytotal = employee.salary + employee.bonus - penalty;
console.log("total salary :",salarytotal)