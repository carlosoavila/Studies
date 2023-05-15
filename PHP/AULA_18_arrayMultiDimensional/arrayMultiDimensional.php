<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Array Multi Dimensional </title>
</head>
<body>
    <?php 
        <?php 

        $cars = array(
            array('Fusca', 15, 20), //Linha 0
            array('Gol', 20, 19), //Linha 1
            array('Kombi', 35, 60), //Linha 2
            array('Uno', 40, 90) //Linha 3

        );
?>

<table style="border:1px solid black;">

    <tr>
        <th>Carros</th>
        <th>Qtde em Estoque</th>
        <th>Qtde Vendida</th>
    </tr>





<?php
        // var_dump($cars);
        
       // echo("<br> Os carros cadastrados são: <br>");
       // echo("<br> Carro - Estoque - Vendidos <br>");
        for($i = 0; $i < 4; $i++) {
            echo("<tr>");
            for($j = 0; $j < 3; $j++) {
                echo("<td>" . $cars[$i][$j] . "</td>");
            }
            echo("</tr>");
        }


    ?>
    </table>




    ?>
    
    
</body>
</html>