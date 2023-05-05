<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prática variáveis</title>
</head>
<body>
    
<?php 
    //Comenta uma linha
    # Comenta uma linha

    /* Comenta varias linhas */

    //Variáveis são case sensitive
    $resposta_expressao = 5 + 15 + 6;
    echo ("<br>$resposta_expressao"); // Mais recomendada

    ECHO ("<br>$resposta_expressao");
    EcHo ("<br>$resposta_expressao");
     $CarlosAlberto = 5 + 5;

     $valorFloat = 12.0; // Float
     $valorInt = 8; // Inteiro
     $nomePessoa = "Carlos Alberto"; // String

     $salario_funcionario = 1200.00;
     $notaAluno = 12.90;
     print("<br> salário do funcionário é $salario_funcionario");
     print("<br nota do aluno é $notaAluno pontos");
     print('<br> Exemplo de string com aspas simples' .  $notaAluno); //Exemplo aspas simples

    

?>
</body>
</html>