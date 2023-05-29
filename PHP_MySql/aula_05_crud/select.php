<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lista de produtos cadastrados</title>
</head>
<body>
  <h2>Lista de produtos cadastrados</h2>
  <?php 
    //Incorporando o arquivo de conexão
    include_once("aula.php");
    //Definindo a string com o comando sql
    $sql = "SELECT * FROM tbprodutos ORDER BY nmProduto";
    //Executando o comando sql
    $dadosProdutos = $conn->query($sql);
    //Verificando se foi retornado alguem registro
    if($dadosProdutos->num_rows > 0) {
      echo("Foi retornado algum registro...");
    }else {
      echo("Nenhum registro foi encontrado");
    }
  
  ?>
</body>
</html>