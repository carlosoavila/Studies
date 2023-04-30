let comprimentoTerreno = parseInt(prompt("Digite comprimento do terreno"))
let larguraTerreno = parseInt(prompt("Digite largura do terreno"))


function calculoAreaTerreno(comprimento, largura) {
   return comprimento * largura
   
}

let area = calculoAreaTerreno(comprimentoTerreno, larguraTerreno)
document.write("A área do terreno é " + area + "m2")
