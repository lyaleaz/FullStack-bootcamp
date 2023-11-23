function True() {
 
    let a = 3
    let c = 0
    let b = a
    b = a
    c = a
    b = c
    a = b
    console.log(c)
}
True();


let obj = {name:"lyale",cat:true, food:"maklooba"}
let obj2 = obj

obj2.food="aaaa"

console.log(obj)
console.log(obj2)

let arr1 = [1,2,3,4]
let arr2=arr1
arr2.push(5)    
console.log(arr1)
console.log(arr2)
