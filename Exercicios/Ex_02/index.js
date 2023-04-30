let altura = parseFloat(prompt("Digite sua altura"))
let sexo = prompt("Digite seu sexo (M / F)")
let pesoIdeal

if(sexo == "M") {
    pesoIdeal = (72.7 * altura) - 58
    document.write("Seu peso ideal é = " + pesoIdeal)
} else {
    pesoIdeal = (62.1 * altura) - 44.7
    document.write("Seu peso ideal é = " + pesoIdeal)
}