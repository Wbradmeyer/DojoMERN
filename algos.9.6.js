// Filter and Map #1
const arr = [1,2,3,4,5,6,7,8]

// let result = arr.filter(num => num < 6)
// let result = arr.filter(num => num >= 6)
// let result = arr.map(num => num * 2)

// create a new array with only even numbers
// let result = arr.filter(num => !(num % 2))

// create a new array with all values from 'arr' squared
// let result = arr.map(num => num **2)

// create a new array with all odd numbers multiplied by 2
// let result = arr.filter(num => num % 2).map(n => n * 2)

// console.log(result)


// Filter #2
const nameArray = ['Bogdan', 'Soledad', 'James', 'Sarah', 'Henri', 'Marta']

// let result = nameArray.filter(name => name.length > 5)
// let result = nameArray.map(name => name.toUpperCase())

// create a new array with only the names starting with 'S'
// let result = nameArray.filter(name => name[0] === 'S').map(n => n.toUpperCase())

// create a new array with all names that are five characters long in lowercase
let result = nameArray.filter(name => name.length == 5).map(name => name.toLowerCase())
// filter out names that are exactly 5 chars
// make 'em lowered

console.log(result)