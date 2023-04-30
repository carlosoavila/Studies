let x = parseInt(prompt("Digite um número"))
let saida = ""

do {
   saida += x + " "
   x++

} while( x <= 10) 

document.write("Os números a serem exibidos são: <br>")
document.write(saida)



