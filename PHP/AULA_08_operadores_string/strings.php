<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operadores de Strings</title>
</head>
<body>
    <?php 
     // Operador de concatenação
    $texto_a = "Olá";
    $texto_b = " mundo!";
    $texto_c = $texto_a . $texto_b;
    echo($texto_c);

    //a .= é o mesmo que a = a + b (incremento)
    $texto_c .= $texto_b;
    echo("<br>" . $texto_c);

    $texto_c .= " mais alguma coisa.";
    echo("<br>" . $texto_c);
      
    ?>
    
    
</body>
</html>