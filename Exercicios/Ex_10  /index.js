let produto1 = parseFloat(prompt("Informe o valor do produto"))
let produto2 = parseFloat(prompt("Informe o valor do produto"))
let produto3 = parseFloat(prompt("Informe o valor do produto"))
let precoTotal = produto1 + produto2 + produto3
let modoPagamento = prompt("Informe o modo de pagamento (1) - para à vista, (2) - pata cheque")
let novoPreco = 0

if( modoPagamento == "1") {
    novoPreco = precoTotal - (precoTotal * 0.10)
    document.write("Preco total da compra é: " + precoTotal + "<br>" + " com desconto fica " + novoPreco )
} else if(modoPagamento == "2") {
    novoPreco = precoTotal + (precoTotal * 0.05)
    document.write("Preco total da compra é: " + precoTotal + "<br>" + " com juros fica " + novoPreco )
}
