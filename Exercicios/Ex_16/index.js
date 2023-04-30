let arrayA = [11, 5, 6, 2 ,15, 1, 5]
let maior = arrayA[0]
let indexMaior = 0

for(let i = 0; i < arrayA.length; i++) {
   if(arrayA[i] > maior) {
      maior = arrayA[i]
      indexMaior = i
   }
}

console.log(maior, indexMaior)