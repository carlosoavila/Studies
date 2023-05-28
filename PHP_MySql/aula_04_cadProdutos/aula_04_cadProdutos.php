<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Produtos</title>
</head>
<body>
  <h1>Cadastro de Produtos</h1>
  <form action="cadProdutos.php" method="post">
    <label for="">Nome do produto</label>
    <input type="text" name="txtProduto" id="txtProduto" autofocus>
    <br><br>
    <label for="">Categoria do produto</label>
    <select name="ddlCategoria" id="ddlCategoria">
      <option value="1">Bebidas</option>
      <option value="2">Alimentos</option>
      <option value="3">Tecnologia da informação</option>
      <option value="4">Escritório</option>
    </select>
    <br><br>
    <label for="">Descrição do produto</label>
    <textarea name="txtDescricao" id="txtDescricao" cols="30" rows="10">

    </textarea>
    <br><br>
    <input type="submit" value="Enviar">
    <input type="reset" value="Limpar">

  </form> 
</body>
</html>