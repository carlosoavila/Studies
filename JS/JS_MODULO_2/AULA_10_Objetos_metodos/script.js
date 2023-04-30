
const pessoa = {
    nome: "Carlos Alberto",
    sobrenome: "Oliveira de Avila",
    idade: 27,
    profissao: "Técnico",
    nomeCompleto: function() { //Método 
        return this.nome + " " + this.sobrenome
    },
    anoNascimento: function() {
        return 2023 - this.idade
    }

}

console.log(pessoa.nomeCompleto())
console.log(pessoa.anoNascimento())


