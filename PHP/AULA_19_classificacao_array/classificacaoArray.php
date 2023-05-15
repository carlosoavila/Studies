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
               $cars = ["BMW" => 1999, "Fusca" => 1989, "Gol" => 2000];

               $numbers = [7, 9, 3, 11, 45, 1, 6];
        
               //sort($cars); // Ordem crescente
               //sort($numbers); // Ordem crescente
        
               //rsort($cars); // Ordem inversa
                //rsort($numbers); // Ordem inversa
        
                //ksort($cars); //Ordem crescente pela chave
                asort($cars); //Ordem crescente pelo valor
               
        
              foreach($cars as $key => $value ) {
                echo ("<br>" . $key . "-" . $value);
              }
        
              echo("<br>");
        
              foreach($numbers as $value) {
                echo (" " . $value);
              }




    ?>
    
    
</body>
</html>