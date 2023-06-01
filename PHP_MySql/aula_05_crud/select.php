<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
  <title>Lista de produtos cadastrados</title>
 
</head>
<body>
  <h2>Lista de produtos cadastrados</h2>
  <?php 
    //Incorporando o arquivo de conexão
    include_once("conexao.php");
    //Definindo a string com o comando sql
    $sql = "SELECT * FROM tbprodutos ORDER BY nmProduto";
    //Executando o comando sql
    $dadosProdutos = $conn->query($sql);
    //Verificando se foi retornado alguem registro
    if($dadosProdutos->num_rows > 0) {
  ?>

  <table class="table table-striped">
    <tr>
      <th>Id</th>
      <th>Nome do produto</th>
      <th>Categoria do produto</th>
      <th>Descrição do produto</th>
      <th>Editar</th>
      <th>Excluir</th>
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
      
      <td><a href="">Editar</a></td>
      <td><a href="">Excluir</a></td>
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