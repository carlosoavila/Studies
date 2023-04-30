
let cursos = [
    {turma: "A", quantidadeAlunos: 10},
    {turma: "B", quantidadeAlunos: 25},
    {turma: "C", quantidadeAlunos: 15},
    {turma: "D", quantidadeAlunos: 12},
]

console.log(cursos)

console.log(cursos[1].turma)

cursos.forEach(index => {
    console.log(index.turma + " "  + index.quantidadeAlunos)
}) 


