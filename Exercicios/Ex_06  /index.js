let nome = prompt("Digite seu nome")
let sexo = prompt("Digite seu sexo (M/F)")
let idade = parseInt(prompt("Digite sua idade"))
let salario = parseFloat(prompt("Digite seu salario"))
let dependentes = parseInt(prompt("Digite o número de dependentes"))
let salarioAtualizado = 0

if (sexo == "M" && dependentes > 7) {
  salarioAtualizado = salario * 1.25
  document.write("O novo salário de " + nome + " é R$" + salarioAtualizado)

} else if (sexo == "M" && idade > 55) {
  salarioAtualizado = salario * 1.15
  document.write("O novo salário de " + nome + " é R$" + salarioAtualizado)

} else if (sexo == "F" && idade > 40) {
  salarioAtualizado = salario * 1.30
  document.write("O novo salário de " + nome + " é R$" + salarioAtualizado)

} else if(sexo == "F" && dependentes > 5) {
  salarioAtualizado = salario * 1.30
  document.write("O novo salário de " + nome + " é R$" + salarioAtualizado)

} else if(sexo !== "M" && sexo !== "F") {
  document.write("Sexo inválido, informe sexo válido (M/F)")

} else {
  salarioAtualizado = salario * 1.05
  document.write("O novo salário de " + nome + " é R$" + salarioAtualizado)
}