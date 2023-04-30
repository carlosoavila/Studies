
//Chama a função a cada segundo
setInterval(exibirRelogio, 1000)

function exibirRelogio() {
    let tempo = new Date
    let hora = String(tempo.getHours()).padStart(2, "0")
    let minuto = String(tempo.getMinutes()).padStart(2, "0")
    let segundo = String(tempo.getSeconds()).padStart(2, "0")
    let horaAtual
    if(hora > 12 ) {
       hora -= hora - 1 
       horaAtual = hora + ":" + minuto + ":" + segundo + " PM"
    } else {
        horaAtual = hora + ":" + minuto + ":" + segundo + " AM"
    }
    
    document.getElementById("clock").innerHTML = horaAtual

}

exibirRelogio()