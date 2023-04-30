let numero = parseInt(prompt("Digite um número"))
let divisivel = 0
let i = 1


while(i < numero ){
  if(i % 3 == 0) {
    divisivel++
    console.log(divisivel)
  }
  i++
}

document.write(divisivel)