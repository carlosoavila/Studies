let arrayA = [11, 5, 6, 2 ,10, 1, 5]
let menor = arrayA[0]
let indexMenor = 0

for(let i = 0; i < arrayA.length; i++) {
   if(arrayA[i] < menor) {
      menor = arrayA[i]
      indexMenor = i
   }
}

console.log(menor, indexMenor)