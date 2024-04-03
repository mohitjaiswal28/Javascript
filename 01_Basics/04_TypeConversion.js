
// String to Number

let score = "33"

let score1 = parseInt(score)
let score2 = parseFloat(score)
let score3 = Number(score)
let score4 = +score

console.table([typeof score, typeof score1, typeof score2, typeof score3, typeof score4])

/* 
    "33" -> 33
    "33abc" -> NaN
    true -> 1
    false -> 0
*/


// Number to String

let year = 2024

let year1 = String(year)
let year2 = year.toString()     // year is primitive datatype then how there is method toString(), because Javascript creates temporary wrapper class

console.table([typeof year, typeof year1, typeof year2])


// Number to Boolean

let num = 1

let num1 = Boolean(num)

console.table([typeof num, typeof num1])