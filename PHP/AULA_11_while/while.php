<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>While</title>
</head>
<body>
    <?php 
   //Comando de repetição while

   $a = 1;

   while ($a <= 10) {
    echo("<br>$a"); //Código a ser executado
    if($a == 5) { //Finaliza a execução do bloco
        break;
    }
    $a++;
   }
    ?>
    
    
</body>
</html>