<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operadores Aritméticos</title>
</head>
<body>
    <?php 
        $x = 10;
        $y = 3;
        $soma = $x + $y;
        //echo("A soma é $x + $y"); // Escreve string
        echo("A soma é " . $soma);
        echo("<br>A subração é " . $x - $y); // Escreve o valor da operação.
        echo("<br>A mutiplicação é " . $x * $y);
        echo("<br>A divisão é " . $x / $y);
        echo("<br>O resto (módulo) é " . $x % $y);
        echo("<br>A Pôtencia é " . $x ** $y);
    
    ?>
    
    
</body>
</html>