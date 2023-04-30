let arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arrayB = [41, 74, 64, 51, 48, 34, 25, 18, 2, 6]
let arrayC = []


for(let i = 0; i < arrayA.length; i++) {
   arrayC[i] =  arrayA[i] * arrayB[i]
}

console.log(arrayC)