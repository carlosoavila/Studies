let num1 = parseInt(prompt("Informe um valor"))
let num2 = parseInt(prompt("Informe um valor"))
let resultado
let operacao = prompt("Informe a operação desejada (+/-)")


if(operacao == "+") {
   resultado = num1 + num2
} else  {
   resultado = num1 - num2
}

console.log(resultado)