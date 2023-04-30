
const lampada = {
    fabricante: "ELGIN",
    cor: "white",
    isOn: true,
    potencia: "10w",
    trocarOnOff: function() {
        if(this.isOn) {
            console.log("ligada")
        } else {
            console.log("desligada")
        }

        this.isOn = !this.isOn //Operador de negação
    }

    
}

console.log(lampada.trocarOnOff())
console.log(lampada.trocarOnOff())
console.log(lampada.trocarOnOff())
