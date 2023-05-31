<?php
include_once("conexao.php");

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastrar Produtos</title>
</head>
<body>
    <h2>Cadastro de Produtos</h2>
    <form action="inderirProduto.php" method="post">
        <label for="txtProduto">Nome do Produto: </label>
        <br>
        <input type="text" name="txtProduto" id="txtProduto" required autofocus placeholder="Nome do Produto">
        <br><br>
        <label for="ddlCategoria">Categoria do Produto: </label>
        <br>
        <select name="ddlCategoria" id="ddlCategoria">
            <option value="0">>--Selecione uma Categoria--<</option>
            <?php
                $sql = "SELECT * FROM tbcategoria ORDER BY nmCategoria asc";
                $registros = $conn->query($sql);
                while($exibir = $registros->fetch_assoc()) {
                    ?>
                    <option value="<?php  echo($exibir["idCategoria"]); ?>"> <?php  echo($exibir["nmCategoria"]); ?> </option>

            
            
            
                    <?php
                }
            ?>

        </select>
        <br><br>
        <label for="txtDescProduto">Descrição do Produto</label>
        <br>
        <textarea name="txtDescProduto" id="txtDescProduto" cols="30" rows="10" placeholder="Descrição do Produto">

        </textarea>
        <br><br>
        <input type="submit" value="Salvar">
        <input type="reset" value="Calcelar">

    </form>
</body>
</html>