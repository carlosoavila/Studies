let curso = "Programador LifeStyle"
// Tamanho da string
document.write(curso.length)

document.write("<br>")
//Percorrendo String
for (let i = 0; i < curso.length; i++) {
    document.write(curso[i])
}
document.write("<br>")
//Escrevendo de trás para frente a String

for (let i = curso.length - 1; i >= 0; i--) {
    document.write(curso[i])
}