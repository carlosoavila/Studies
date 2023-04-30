let produto1 = parseFloat(prompt("Digite o valor do produto"))
let produto2 = parseFloat(prompt("Digite o valor do produto"))
let produto3 = parseFloat(prompt("Digite o valor do produto"))
let precoTotal = produto1 + produto2 + produto3
let precoTotalDesconto = precoTotal - (precoTotal * 0.15)   
document.write("Preço total da compra = R$" + precoTotal + " preço com desconto = R$" + precoTotalDesconto)