
let notas = []
let saida = ""
let somaNotas = 0
let notaMedia = 0
let contar = 0

// Leitura de dados
for(let index = 0; index <= 4; index++) {
        notas[index] = parseInt(prompt("Informe a nota do " + index + " aluno" ))
        
}

// Saída de dados
for(let index = 0; index < 4; index++) {
    saida += document.write("<br>A nota do aluno " + (index + 1)  + "é: " + notas[index])
}

for(let index = 0; index < 4; index++) {
    somaNotas += notas[index]
}

notaMedia  = somaNotas / 4

for(let index = 0; index < 4; index++) {
    if(notas[index] >= notaMedia) {
        contar++
    }
    
}

document.write("<br>A nota média da turma é " + notaMedia)
document.write("<br>Á " + contar + " alunos com nota média!")