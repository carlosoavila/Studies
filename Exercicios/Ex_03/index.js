let numero1 = parseInt(prompt("Digite um número"))
let numero2 = parseInt(prompt("Digite um número"))
let numero3 = parseInt(prompt("Digite um número"))

if (numero1 > numero2 && numero1 > numero3 ) {
    document.write(numero1 + " É maior que " + numero2 + " e " + numero3)
} else if (numero2 > numero1 && numero2 > numero3) {
    document.write(numero2 + " É maior que " + numero1 + " e " + numero3)
} else if (numero3 > numero1 && numero3 > numero2) {
    document.write(numero3 + " É maior que " + numero1 + " e " + numero2)
} 