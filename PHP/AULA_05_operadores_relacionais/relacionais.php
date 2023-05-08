<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operadores Relacionais</title>
</head>
<body>
    <?php 
               $x = true;
               $y = true;
       
               //Retorna informações sobre as variáveis
               var_dump($x == $y); //Retorna true
               echo("<br>");
               var_dump($x === $y); //Retorna true
               echo("<br>");
               var_dump($x != $Y); // Retorna true
               echo("<br>");
               var_dump($x <> $y); // Retorna false
               echo("<br>");
               var_dump($x !== $y); // Retorna false
               echo("<br>");
               echo("<br>");
       
               $x = 10;
               $y = 1;
               var_dump($x > $y); //false
               echo("<br>");
               var_dump($x < $y); //true
               echo("<br>");
               var_dump($x >= $y); //false
               echo("<br>");
               var_dump($x <= $y); //true
               echo("<br>");
    ?>
    
    
</body>
</html>