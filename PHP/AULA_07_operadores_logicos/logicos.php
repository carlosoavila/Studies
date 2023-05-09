<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operadores Lógicos</title>
</head>
<body>
    <?php 
         // Todas as condições devem ser verdadeiras
    // and == &&
    var_dump(true && false);// retorna false
    echo("<br>");
    var_dump(true && true);// retorna true

    echo("<br>");

    // Uma das condições deve ser verdadeira
    //or == ||
    var_dump(true || false || false);// retorna true
    echo("<br>");
    var_dump(true || true || true);// retorna true
    echo("<br>");
    var_dump(false || false || false);// retorna false

    echo("<br>");

    //Operador de negação
    var_dump(!false);// retorna true
    echo("<br>");
    var_dump(!true);// retorna false

    echo("<br>");

    //Operador xor
    var_dump(true xor false);// retorna true
    echo("<br>");
    var_dump(true xor true);// retorna false
    echo("<br>");
    var_dump(false xor true);// retorna true
    echo("<br>");
    var_dump(false xor false);// retorna false
      
    ?>
    
    
</body>
</html>