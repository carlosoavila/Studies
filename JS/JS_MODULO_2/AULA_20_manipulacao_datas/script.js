//Escrever na tela a data no formato dd/mm/yy

//Criar um construtor do objeto date()

let dataAtual = new Date()

//Pegar o dia da data

let dia = String(dataAtual.getDate()).padStart(2, "0")
console.log(dia)

//Pegar o mês OBS: em JS o mês começa em zero
let mes = String(dataAtual.getMonth() + 1).padStart(2, "0") 
console.log(mes)

//Pegar o ano da data
let ano = dataAtual.getFullYear()
console.log(ano)

let data = dia + "/" + mes + "/" + ano
console.log(data)

