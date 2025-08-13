// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); //object


// let myCreatedDate = new Date(2023, 0, 23)

// console.log(myCreatedDate.toDateString());



 let yourDate = new Date("01-04-2023")
// console.log(yourDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(yourDate.getTime());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
    timezone: ""

})

