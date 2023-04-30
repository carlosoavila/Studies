let notas 
let media = 0
let novaNota = 0
let i = 0
while(i < 10) {
   notas = parseFloat(prompt("Digite a nota  aluno"))
  if(notas <= 100 && notas >= 0) {
     novaNota += notas 
     console.log(novaNota)
     i++
  }else {
   notas = parseFloat(prompt("Digite uma nota válida, digite a nota  aluno"))
  }
  
}  

media = notas / 10
document.write("Nota média da turma" + media)