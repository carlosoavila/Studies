let sexo = prompt("Informe seu sexo (M/F)")
let nome = prompt("Informe seu nome")
let altura = parseFloat(prompt("informe sua altura")) 
let novaAltura = 0

if(sexo === "M") {
    novaAltura = altura / 2
    document.write("A metade da altura de " + nome + " é: " + novaAltura)
} else if (sexo == "F") {
    novaAltura = altura * 2
    document.write("O dobro da altura de " + nome + " é: " + novaAltura)
}