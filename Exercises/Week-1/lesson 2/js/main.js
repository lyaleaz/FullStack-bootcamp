//  // Exercise 1
// console.log("\nExercise 1:");

// console.log((5 > 2) && false);
// console.log(!("knife" === "sword"));
// console.log((1 < 2) || (-1 > -1) || !false);
// console.log("");
// console.log((31 % 5) == "1");
// console.log(!!true);
// console.log("5th Avenue" != "5th Avenue");
// console.log(52 !== "52");
// console.log(undefined || null);

// // Exercise 2
// console.log("\nExercise 2:");
// function True() {
 
//     let a = 3
//     let c = 0
//     let b = a
//     b = a
//     c = a
//     b = c
//     a = b
//     console.log(c)
// }
// True();

// Exercise 3
// let boughtTesla = true
// const yearOfTeslaPurchase = 2014
// let isUSCitizen = true
// let currentYear = 2018
// console.log("\nExercise 3:");
// function AI(boughtTesla,yearOfTeslaPurchase,isUSCitizen,currentYear){
   
//     let years = currentYear - yearOfTeslaPurchase;
//         if(boughtTesla&&isUSCitizen)
//         {   
       
//             if(years>=4)
//             {
//                 console.log("Would you like an upgrade?");
//             }
//             else
//             {
//                 console.log("Are you satisfied with the car?");
//         }
//     }
        
//     if(boughtTesla&&!isUSCitizen)
//     {
//         console.log("would you like to move to the US");
//     }
//     if(!boughtTesla)
//     {
//         console.log("Are you interested in buying a Tesla?");
//     }

        
    

// } 
// console.log(AI(boughtTesla,yearOfTeslaPurchase,isUSCitizen,currentYear))
// AI(boughtTesla,yearOfTeslaPurchase,isUSCitizen,currentYear)

console.log("\n 11. Exercises");
console.log("Exercise 1 :\n");

function arr(){
    const numbers = [1,2,3,4,5,6,7,8,9,10]
    numbers.splice(1,2)
    numbers[3]=1;
    numbers.splice(4,4);
    numbers.unshift(0);
    console.log(numbers);

}
console.log(arr());



// console.log("Exercise 13:");
// console.log("Exercise 13.1:");
// let p1 = {
//     name: "Lyale",
//     age: 23,
//     city: "Taybih"
// };

// let p2 = {
//     name: "Mohammed",
//     age: 23,
//     city: "Taybih"
// };

// function persons(p1, p2){

//     if (p1.age==p2.age && p1.city==p2.city)
//         console.log("Jill wanted to date Robert");
//     else if(p1.city!=p2.city)
//         console.log("Jill wanted to date Robert, but couldn’t");

// }

// persons(p1,p2);

// console.log("Exercise 13.2:");
// console.log("exercise 2:\n")

// let books={
//     book:[
//         {
//             title: "aaa",
//             author :"lyale"
//         },
//          {
//             title: "aba",
//             author :"ahmad"
//         },
//     ]
// };
// console.log(books);




// console.log("15. Exercises Loops Exercise 1");
// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []

// function loop()
// {
//     for(let i=0; i<names.length;i++)
//     {
//         let person ={
//             name: names[i],
//             age: ages[i]
//         }
//         people.push(person)
//     }
//     console.log(people);
// }
// loop();

// console.log("15. Exercises Loops Exercise 3");
// const posts = [
//   {id: 1, text: "Love this product"},
//   {id: 2, text: "This is the worst. DON'T BUY!"},
//   {id: 3, text: "So glad I found this. Bought four already!"}
// ]
// const idRemove=2
// for (let i = 0; i < posts.length; i++) {
//   if (posts[i].id === idRemove) {
//     posts.splice(i, 1);
//   }
// }
// console.log(posts);


// /* console.log("\n Exercise 3 \n");

// function exer3()
// {
//         const reservations = {
//             Bob: { claimed: false },
//             Ted: { claimed: true }
//             };

//         const name = prompt('Please enter the name for your reservation');
//         const lowerName = name.toLowerCase();

//         if(reservations[name])
//         {
//             if(!reservations[lowerName].claimed){
//                 console.log(`Welcome, ${name}!`)
//             }
//             else{
//                 reservations[lowerName] = { claimed: true };
//                 console.log(`someone already claimed this reservation for ${lowerName}.`)
//             }
//         }
//             else {
//             console.log('You have no reservation.');
//         }
//     }
// exer3() */
// /////Extensions 13
// console.log("Extensions 13");
// const date = 3

// const kitchen = {
//     owner: "Geraldine",
//     hasOven: true/false, // choose one
//     fridge: {
//         price: 500,
//         works: true/false, // choose one
//         items: [
//             { name: "cheese", expiryDate: 7 },
//             { name: "raddish", expiryDate: 2 },
//             { name: "bread", expiryDate: 1 }
//         ]
//     }
// }
// const hasOven = kitchen.hasOven;
// const fridgeWorks = kitchen.fridge.works;
// const fridgePrice = kitchen.fridge.price / 2;

// function dayPast(expiryDate)
// {
//     return date - expiryDate;
// }
// if (hasOven && fridgeWorks) {
//     console.log(`${kitchen.owner}'s ${kitchen.fridge.items[1].name} expired ${dayPast(kitchen.fridge.items[1].expiryDate)} day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the ${kitchen.fridge.items[1].name} in.`);
// } else if (!hasOven && fridgeWorks) {
//     console.log(`${kitchen.owner}'s ${kitchen.fridge.items[1].name} expired ${dayPast(kitchen.fridge.items[1].expiryDate)} day ago. Weird, considering her fridge works. Too bad she doesn’t have an oven to cook the ${kitchen.fridge.items[1].name} in.`);
// } else if (hasOven && !fridgeWorks) {
//     console.log(`${kitchen.owner}'s ${kitchen.fridge.items[1].name} expired ${dayPast(kitchen.fridge.items[1].expiryDate)} day ago. Probably because her fridge doesn’t work. Luckily, she has an oven to cook the ${kitchen.fridge.items[1].name} in. And she’ll have to pay ${fridgePrice} to fix the fridge.`);
// } else if (!hasOven && !fridgeWorks) {
//     console.log(`${kitchen.owner}'s ${kitchen.fridge.items[1].name} expired ${dayPast(kitchen.fridge.items[1].expiryDate)} day ago. Probably because her fridge doesn’t work. Too bad she doesn’t have an oven to cook the ${kitchen.fridge.items[1].name} in. And she’ll have to pay ${fridgePrice} to fix the fridge.`);
// } 


// console.log("Exercise 15.4")
// const posts = [
//   {
//     id: 1, 
//     text: "Love this product",
//     comments: []
//   },
//   { 
//     id: 2, 
//     text: "This is the worst. DON'T BUY!", 
//     comments: [
//                 {id: 1, text: "Idiot has no idea"}, 
//                 {id: 2, text:"Fool!"}, 
//                 {id: 3, text: "I agree!"}
//               ]
//    },
//    {
//     id: 3, 
//     text: "So glad I found this. Bought four already!",
//     comments: []
//    }
// ]
// const idFind=2;
// const IdRemove=3;
// for (let i=0;i<posts.length;i++)
// {
//     if(posts[i].id===idFind)
//         {
//             for(let j=0 ; j<posts[i].IdRemove;j++){
//                 posts[i].comments.splice(j,1);
//             }
//         }
// }
// console.log(posts);
// const dictionary = {
//   "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
//   "B": ["Banana", "Bonkers", "Brain", "Bump"],
//   "C": ["Callous", "Chain", "Coil", "Czech"]
// };
// for (const i in dictionary)
// {
//      console.log(`Words that begin with ${i}:`);

// for (const word of dictionary[i])
// {
//  console.log(`    ${word}`);
// }
//    console.log();

// }