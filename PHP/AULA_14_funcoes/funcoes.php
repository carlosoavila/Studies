<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Funções </title>
</head>
<body>
    <?php 
     // função sem parâmetros
     function somarValores(){
        $a = 10;
        $b = 20;
        echo $a + $b;
    }

    somarValores();

    //função com parâmetros

    echo("<br>");

    function somarValores_2($a, $b) {
        echo $a + $b;
    }

    $x = 9;
    $y = 6;

    somarValores_2($x,$y);
    
    echo("<br>");

    somarValores_2(10, 15);

    //função com retorno
    function subtraiValores($a, $b) {
        return $a - $b;
    }

    echo ("<br> 10 - 5 = " . subtraiValores(10, 5)); 
    echo("<br> X - Y = " . subtraiValores($x, $y));

    $soma = 10 + 2 + subtraiValores($x, $y);
    echo("<br>" . $soma);



    ?>
    
    
</body>
</html>