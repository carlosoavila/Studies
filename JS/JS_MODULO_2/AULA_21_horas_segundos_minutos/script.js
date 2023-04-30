//Escrever na tela a data no formato dd/mm/yy
//Data e hora
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

//Data e Hora

let hora = String(dataAtual.getHours()).padStart(2, "0")
console.log(hora)

let min = String(dataAtual.getMinutes()).padStart(2, "0")
console.log(min)

let segundos = String(dataAtual.getSeconds()).padStart(2, "0")
console.log(segundos)

let horario = hora  + ":" + min + ":" + segundos
console.log(horario)