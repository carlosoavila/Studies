<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Arrays </title>
</head>
<body>
    <?php 
    //declarando um array
    $carros1 = array("Fusca", "Brasília", "Kombi", "Variante", "Gol", "Parati");
    //$carros2 = ["Fusca", "Brasilia", "Kombi", "Variante", "Gol", "Parati"]; // forma abreviada

    echo ("Meu carro favorito é $carros1[0]");
    echo ("<br> O nosso array tem tamanho " . count($carros1));
    
    
    $carros2 = array();
    $carros2[0] = "carro_2";
    $carros2[1] = "carro_2";
    $carros2[2] = "carro_2";
    echo("<br> $carros2[0]");

    echo ("<br> Todos os carros da coleção: ");
    echo("<ul>");
    for($i = 0; $i < 6; $i++) {
        echo("<li>" . $carros1[$i] . "</li>");
    }
    echo("</li>");
    //var_dump($carros1);




    ?>
    
    
</body>
</html>