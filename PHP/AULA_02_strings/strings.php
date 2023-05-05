<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strings</title>
</head>
<body>
    <?php 
        $nome_professor = "Marcio Assis Miranda";
        $nome_curso = "Programação Web";

        //Quando usamos aspas duplas não é necessário usar o operador de conccatenação (.)
        echo ("<br>Eu faço o curso $nome_curso e o professor se chama $nome_professor .");
        echo ('<br>Eu faço o curso ' . $nome_curso . ' e o professor se chama ' . $nome_professor . '.');
    
        //Tamanho das strings
        echo("<br>");
        echo(strlen($nome_professor));

        //Quantidade de palavras
        echo("<br>");
        echo(str_word_count($nome_professor));

         //Inverter a String
         echo("<br>");
         echo(strrev($nome_professor));

         //Retorna a posição de uma string
         echo("<br>");
         echo(strpos($nome_professor, "Assis"));

        //Substituí uma string
         echo("<br>");
         echo(str_replace("Assis", "Aredes", $nome_professor));

    
    ?>
    
    
</body>
</html>