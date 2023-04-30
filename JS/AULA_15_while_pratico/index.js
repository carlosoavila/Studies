let contador = 1

while (contador <= 3) {
   let nota = parseFloat(prompt("Informe um valor da nota"))


   if (nota >= 60) {
      document.write("Aluno aprovado " + "<br>")
   
   } else if (nota >= 40) {
      document.write("Aluno em recuperação " + "<br>")
      
   }

   else {
      document.write("Aluno reprovado " + "<br>")
     
   }

   contador = contador + 1
}
