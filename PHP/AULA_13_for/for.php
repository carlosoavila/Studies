<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> For </title>
</head>
<body>
    <?php 
   //Comando de repetição for

   $num = 5;
   $soma = 0;

  for ($i = 0; $i <= 10; $i++) {
   $soma = $i + $num;
   echo("<br> $i + $num = $soma");

  }
    ?>
    
    
</body>
</html>