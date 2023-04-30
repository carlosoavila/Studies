let nome = prompt("Digite o nome do funcionário")
let idade = parseInt(prompt("Digite a idade do funcionário"))
let dependentes = parseInt(prompt("Digite o número de dependentes"))
let salario = parseFloat(prompt("Digite o sálario do funcionário"))
let salarioAjustado

if(idade > 55 && dependentes > 3) {
   salarioAjustado = (salario * 0.3) + salario
   document.write("O novo sálario do funcionário é de = R$ " + salarioAjustado )

} else if(idade >= 40 && idade <= 55 || dependentes > 1 ) {
   salarioAjustado = (salario * 0.25) + salario
   document.write("O novo sálario do funcionário é de = R$ " + salarioAjustado )

}  else {
   salarioAjustado = (salario* 0.1) + salario
   document.write("O novo sálario do funcionário é de = R$ " + salarioAjustado )
}