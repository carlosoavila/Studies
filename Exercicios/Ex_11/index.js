let salario = parseFloat(prompt("Informe seu sálario"))
let tempo = parseInt(prompt("Informe seu tempo de casa em meses"))
let novoSalario = 0

if(salario < 150 && tempo <= 24) {
    novoSalario = salario + (salario * 0.10)
    document.write("Você tem 7 dias de folga e recebeu um aumento no sálario, seu novo sálario é: R$" + novoSalario)
} else if(salario >= 150 && tempo > 36) {
    novoSalario = salario + (salario * 0.08)
    document.write("Você tem 12 dias de folga e recebeu um aumento no sálario, seu novo sálario é: R$" + novoSalario)
} else {
    document.write("Você tem 15 dias de folga")
}