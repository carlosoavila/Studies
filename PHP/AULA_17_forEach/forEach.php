<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Foreach</title>
</head>
<body>
    <?php 
      $frutas = ["Maçã, Pera, Laranja, Banana"];
      $idades = array("Márcio" => 42, "Júlia" => 10, "Raquel" => 40);
  
      //Exemplo simplificado
      foreach($frutas as $value) {
          echo("<br> $value");
      }
  
      echo("<br>");
  
      //Exemplo com chave
      foreach($idades as $key => $value) {
          echo ("<br> $key tem $value anos.");
      }
  




    ?>
    
    
</body>
</html>