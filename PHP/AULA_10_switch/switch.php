<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Switch</title>
</head>
<body>
    <?php 
    $cor_favorita = "Azul";

    switch ($cor_favorita) {
     case 'Amarelo' :
         echo ("Amarelo é a cor favorita");
 
         break; // Finaliza a execução do bloco
     case 'Azul' :
         echo ("Azul é a cor favorita");
             
         break;
     case 'Vermelho' :
         echo ("Vermelho é a cor favorita");
                 
         break;
     case 'Preto' :
         echo ("Preto é a cor favorita");
                     
         break;    
     default:
         echo("Nenhuma cor é favorita");
    }
 
    echo("<br>");
 
    $alternativa = "C";
 
    switch ($alternativa) {
     case "A" :
         echo ("Alternativa A");
 
         break; // Finaliza a execução do bloco
     case "B" :
         echo ("Alternativa B");
             
         break;
     case "C" :
         echo ("Alternativa C");
                 
         break;
     case "D" :
         echo ("Alternativa D");
                     
         break;    
     default:
         echo("Nenhuma alternativa");
    }
      
    ?>
    
    
</body>
</html>