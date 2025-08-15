//array

// const myArr = [0,1,2,3,4,5]
// const myHeroes = ["shaktiman", "nagraj"]
// const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[0]);


//array methods

// myArr.push(6);
// console.log(myArr);

// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(3)); //3

// const newArr = myArr.join()

// console.log(typeof newArr);
// console.log(myArr);

//slice,splice

// console.log("A" , myArr);
// const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B", myArr)

// const myn2 = myArr.splice(1, 3)
// console.log("C", myArr);
// console.log(myn2);


// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "batman", "wonderwoman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc_heros)
// const allHero = marvel_heros.concat(dc_heros)
// console.log(allHero);


// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);


//it will join the arrays inside the array
// const another_array = [1, 2, 3,[ 4, 5, 6], 7,[ 8, 9]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("riya"))
// console.log(Array.from("riya"))
// console.log(Array.from({name: "riya})) //interstingg

let score1 = 100
let score2 = 200
let score3 = 500

console.log(Array.of(score1, score2, score3)); 