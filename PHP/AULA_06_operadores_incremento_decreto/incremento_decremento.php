<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Incremento e Decremento</title>
</head>
<body>
    <?php 
       $x = 10;
       //$x++; -> x = x +1
       echo($x++); //escreve o x e incrementá-lo
       echo("<br>" . $x);//11
       echo("<br>". $x--); //escreve o x e decrementá-lo
       echo("<br>" . $x);//10

       echo("<br><br>" . ++$x); //incrementa o x e escrevê-lo 
       echo("<br>" . --$x); //decrementa o x e escrevê-lo 
      
    ?>
    
    
</body>
</html>