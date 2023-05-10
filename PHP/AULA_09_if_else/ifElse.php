<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>If Else</title>
</head>
<body>
    <?php 
     //if... else
     $a = 10;
     $b = 11;
 
     if($a == $b) {
         echo("$a é igual a $b");
     }else {
         echo("$a é diferente de $b");
     }
     
      echo("<br>");
 
     $num = 1;
     if($num > 0) {
         echo ("$num é positivo");
     } else if($num < 0) {
         echo("$num é negativo");
     } else {
         echo("$num é nulo");
     }
      
    ?>
    
    
</body>
</html>