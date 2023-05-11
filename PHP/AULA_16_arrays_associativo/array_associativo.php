<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Array Associativo </title>
</head>
<body>
    <?php 
     //array associativo
     $carros = array("Fusca", "Brasília", "Kombi");
     $anoFab = array("Fusca" => 1970, "Brasília" => 1960, "Kombi" => 1967);
     //var_dump($anoFab);
     echo($anoFab["Fusca"]);
 
     echo("<br> Carro - Ano de Fabricação");
     echo("<br>" . $carros[0] . " - " . $anoFab["Fusca"]);
     echo("<br>" . $carros[1] . " - " . $anoFab["Brasília"]);
     echo("<br>" . $carros[2] . " - " . $anoFab["Kombi"]);




    ?>
    
    
</body>
</html>