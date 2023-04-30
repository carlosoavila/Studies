
const pessoa = {
    nome: "Carlos Alberto",
    salario: 5000.00,
    dataEmprego: "11/07/2018",
    idade: 46,
    tempoEmprego: function() {
        let anoEmprego = this.dataEmprego.slice(6, 10)
        return anoEmprego - 2005
    },

    novoSalario: function() {
        let tempo = this.tempoEmprego()
        if (tempo > 10 && this.idade > 45) {
            return this.salario * 1.12
        } else {
            return this.salario
        }
    }
}

console.log(pessoa.tempoEmprego())
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.dataEmprego)
console.log(pessoa.novoSalario())
