
//--------------example 1----------------
// const bag = ["flashlight", "medicine"]
// const moreItems = ["tent", "water bottle", "knife", "rope"]

// if(bag.length < 3){
//   const nextItem = moreItems[0]
//   bag.push(nextItem)
// }

// console.log(bag)
// console.log("Added " + nextItem)

//------------example 2----------------------
// let height = 1.73

// const grow = function(){
//   height += 0.1
// }

// grow()
// console.log(height)

//-------------example 3--------------
// const getBaseHeight = function(){
//   const height = 1.73  
//   return height
// }

// const grow = function(){
//   height += 0.1
// }

// grow()
//-------------example 5-------------
//    let greeting = "say Hi";
//    let times = 4;

//    if (times > 3) {
//         let hello = "say Hello instead";
//         console.log(hello);// "say Hello instead"
//     }
//    console.log(hello) // hello is not defined

//-------------example 5 loop-------------

// const names = ["Allison", "Beatrice", "Charles"]

// for(let n of names){
//   let coolName = "cool " + n
//   console.log(coolName)
// }

// console.log(coolName) // throws an error

///++++++Section 1++++++

// const run = true

// if (run) {
//     let distance = 8
//     for (var i = 0; i < distance; i++) {
//         console.log("running")
//     }
//     console.log("Finished running " + distance + " miles")
// }

// console.log("Damn, you see this gal? She ran " + distance + " miles") 

///++++++Section 2++++++


// if (13 == "space") {
//     let cowSound = "moo"
// }
// else {
//     console.log("Cow says " + cowSound)
// }
///++++++Section 3++++++

const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder)
    }

    console.log("Finished serving all the orders: " + orders)
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)


///++++++Section 4++++++

// const pot = "red pot with earth in it"

// const getSeed = function () {
//     const seed = "brown seed"
// }

// const plant = function () {
//     getSeed()
//     console.log("Planting the " + seed + " inside a " + pot)
// }

// plant()

///++++++Section 5++++++
// const doesUserExist = function (name) {
//     const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
//     for (let u of users) {
//         if (u.name == name) {
//             const found = true
//         }
//     }
//     return found
// }

// const userExists = doesUserExist("Lucius")
// if (userExists) {
//     console.log("We found the ragamuffin!")
// }
// else {
//     console.log("No idea where this person is.")
// }



const isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}
