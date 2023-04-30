
let notas = []
let nomes = []
let saida = ""
let somaNotas = 0
let notaMedia = 0
let contar = 0
let nomesMaiorMedia = "<br>"

// Leitura de dados
for(let index = 0; index <= 4; index++) {
        nomes[index] = prompt("Informe o nome do aluno " +  (index + 1))
        notas[index] = parseInt(prompt("Informe a nota do " + (index + 1) + " aluno" ))
        
}

// Saída de dados
for(let index = 0; index < 4; index++) {
    saida += document.write("<br>A nota do aluno " + (nomes[index])  + " é: " + notas[index])
}

for(let index = 0; index < 4; index++) {
    somaNotas += notas[index]
}

notaMedia  = somaNotas / 4

for(let index = 0; index < 4; index++) {
    if(notas[index] >= notaMedia) {
        nomesMaiorMedia += "<br>" + nomes[index] 
        contar++
    }
    
}

document.write("<br>A nota média da turma é " + notaMedia)
document.write("<br>Á " + contar + " alunos com nota média!")
document.write("Os alunos com a maior média são " + nomesMaiorMedia)