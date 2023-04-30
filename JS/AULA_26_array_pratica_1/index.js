
let notas = []
let saida = ""

// Leitura de dados
for(let index = 0; index <= 4; index++) {
        notas[index] = parseInt(prompt("Informe a nota do " + index + " aluno" ))
}

// Saída de dados
for(let index = 0; index < 4; index++) {
    saida += document.write("<br>A nota do aluno " + (index + 1)  + "é: " + notas[index])
}