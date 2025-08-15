//singleton
Object.create

//objects literals

// const mySymb = symbol("key1")

const JsUser = { 
    name:"riya",
    // [mySymb]: "mykey1",
    age: 20,
    location: "noida",
    isLoggedIn: true,  
}

console.log(JsUser.age);
console.log(JsUser["name"]);
// console.log(JsUser[mySymb]);


JsUser.age =  "21"
Object.freeze(JsUser) // makes object immutable