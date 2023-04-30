let contador = 1
let numero = parseInt(prompt("Informe um número"))
let tabuada = ""
let soma = 0

while (numero < 1 || numero > 10) {
   numero = parseInt(prompt("Número inválido\nInforme um número de 1 a 10"))
}



while (contador <= 10) {
   soma = contador + numero
   tabuada += contador + "+" + numero + "=" + soma + "<br>"

   contador++
}

document.write("A tabuada do número " + numero + " é:<br>")
document.write(tabuada)



