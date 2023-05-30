<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lista de produtos cadastrados</title>
  <style>

    table, th, td {
      border: 1px solid black;
      border-collapse: collapse;
      padding: 10px;
    }

    table {
      width: 90%;
    }

  </style>
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
  ?>

  <table>
    <tr>
      <th>Id</th>
      <th>Nome do produto</th>
      <th>Categoria do produto</th>
      <th>Descrição do produto</th>
    </tr>
  
<?php
     while($exibir = $dadosProdutos->fetch_assoc()) {
?>
    <tr>
      <td><?php echo ($exibir["idProduto"]); ?> </td>
      <td><?php echo ($exibir["nmProduto"]); ?> </td>
      <?php 

        $sqlCategoria = "SELECT * FROM tbcategoria WHERE idCategoria  = " . $exibir["idCategoria"];
        $dadosCategoria = $conn->query($sqlCategoria);
        $exibirCatergoria = $dadosCategoria->fetch_assoc();
      
      ?>
      
      
      <td><?php echo ($exibirCatergoria["nmCategoria"]); ?> </td>
      <td><?php echo ($exibir["descProduto"]); ?> </td>
    </tr>      



<?php
      echo("id:" .  $exibir['idProduto'] . " - Produto: " . $exibir['nmProduto'] . " - " . $exibir['idCategoria'] . "<br>");
      }
?>
  </table>

  <?php

    }else {
      echo("Nenhum registro foi encontrado");
    }
  
  ?>
</body>
</html>