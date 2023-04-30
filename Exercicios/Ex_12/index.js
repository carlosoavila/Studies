let arrayA = [1, 2, 3, 4, 5, 6, 7, 8]
let arrayB = [41, 74, 64, 51, 48, 34, 25, 18]
let aux = 0

// Também funciona !!!!!!!!
/*arrayC = arrayA
arrayA = arrayB
arrayB = arrayC
*/
//console.log(arrayA)
//console.log(arrayB)

for(let i = 0; i < arrayA.length; i++) {
    arrayC = arrayA[i]
    arrayA[i] = arrayB[i]
    arrayB[i] = arrayC
    
}
console.log(arrayA)
console.log(arrayB)