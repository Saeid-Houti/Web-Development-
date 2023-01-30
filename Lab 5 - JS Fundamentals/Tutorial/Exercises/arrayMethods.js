/*
const students = ['Ahmed', 'Ali', 'Omar', 'Mohamed']
const grades = [112, 90, 50, 44]

// function display(a) {
//     console.log(a)
// }

students.forEach(a => console.log(a))
console.log(grades.map(a => a ** 2))
console.log(grades.filter(a => a < 50))
console.log(students.find(a => a == 'Omar'))

const sum = grades.reduce((acc, curr) => acc + curr)
const mul = grades.reduce((acc, curr) => acc * curr, -1)
const cacat = grades.reduce((a, b) => a + b, "")
console.log(sum)
console.log(mul)
console.log(cacat)

let acc = -1
for (const grade of grades) {
    acc *= grade
}

*/
const nice = [1, 2, 11, 2]
console.log(nice.sort((a, b) => b - a))

// // for (const niceElement of nice) {
// //     console.log(niceElement)
// // }
// const flat = nice.flat(Infinity)


//
// console.log([...new Set(flat)])
// console.log(([...new Set(nice.flat(Infinity))]))
//
// const combined = [...flat , ...flat]
// console.log(combined)


// console.log(nice)
// const flat2Nice = nice.flat(2)
// console.log(flat2Nice)
// //
// const max = nice
//     .flat(Infinity)
//     .map(a => a ** 2)
//     .reduce((a, b) => a > b ? a : b)
//
// console.log(max)

let names=['saeid','ali','houti','mirza']
let grades=[50,90,95,70,65,60,[1,2,3],[3,23,2,5]]

console.log(grades.filter(a => a > 50))
names.forEach(a => console.log(a))
console.log(grades.map(a=>a**2))
console.log(names.find(a=>a=='houti'))

console.log(grades.reduce((a,b)=>a+b))
console.log(grades.reduce((a,b)=>a*b))
console.log(grades.reduce((a,b)=>a+b,''))


let acc = 1
for (const grade of grades) {
    acc *= grade
}
console.log(acc)




 console.log([...new Set(grades.flat(Infinity))])

const max=grades
.flat(Infinity)
.reduce((a,b)=>a>b?a:b)
console.log(max)