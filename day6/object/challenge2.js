//Challenge 02 — Edit a Profile
let user = {
    username: "Ahmed",
    age: 22,
    city: "Marrakech",
    status: "student"
};
console.log(user.username);
console.log(user.age);
user.age = 25;
user.city = "mrirt";
user.status = "en stage"
user.email = `${user.username}@gmail.com`
console.log(user);