<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operadores de Atribuição</title>
</head>
<body>
    <?php 
        $x = 10; //Operador de atribuição
        echo("<br> $x");
        
        $resp = 20;
        $resp += $x; //resp = resp + x
        echo("<br> $resp");

        $resp -= $x; //resp = resp - x
        echo("<br> $resp");

        $resp *= $x; //resp = resp / x
        echo("<br> $resp");

        $resp %= $x; //resp = resp % x
        echo("<br> $resp");

        //Operadores de incremento
        $x++;
        echo("<br> $x");

        //Operadores de decremento
        $x--;
        echo("<br> $x");
    
    ?>
    
    
</body>
</html>