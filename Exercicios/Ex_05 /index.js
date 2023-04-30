let nome = prompt("Digite o seu nome")
let cargo = prompt("Digite seu cargo")
let salario = parseFloat(prompt("Digite seu salario")) 

let salarioBruto = salario + (salario * 0.38)
let salarioGratificacao = salario + (salario * 0.20)
let salarioLiquido = salario - (salarioGratificacao * 0.15)
document.write("Nome do funcionário: " + nome + "\nCargo " + cargo + "\nSalário bruto com gratificação: " + salarioGratificacao + "\nSalário líquido: " + salarioLiquido)