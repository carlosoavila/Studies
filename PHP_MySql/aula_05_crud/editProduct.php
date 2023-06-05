<?php
include_once("conexao.php");

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar produto</title>
</head>
<body>
    <h2>Editar produto</h2>
    <?php 
        $idProduto = $_GET["idProduto"];
        $sql = "SELECT *FROM tbprodutos WHERE idProduto = $idProduto";
        $executa = $conn->query($sql);
        $produto = $executa->fetch_assoc();
    
    
    
    ?>
    <form action="editProduct.php" method="post">
        <label for="txtId">Id Produto: </label>
        <br>
        <br>
        <input type="text" name="txtID" id="txtId" value="<?php echo($produto["idProduto"]); ?>"disable>
        <br>
        <br>
        <label for="txtProduto">Nome do Produto: </label>
        <br>
        <input type="text" name="txtProduto" id="txtProduto" value="<?php echo($produto["nmProduto"]); ?>" required autofocus placeholder="Nome do Produto">
        <br><br>
        <label for="ddlCategoria">Categoria do Produto: </label>
        <br>
        <select name="ddlCategoria" id="ddlCategoria">
            <option value="0">>--Selecione uma Categoria--<</option>
            <?ph<?php
include_once("aula.php");

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar produto</title>
</head>
<body>
    <h2>Editar produto</h2>
    <?php 
        $idProduto = $_GET["idProduto"];
        $sql = "SELECT *FROM tbprodutos WHERE idProduto = $idProduto";
        $executa = $conn->query($sql);
        $produto = $executa->fetch_assoc();
    
    
    
    ?>
    <form action="editProduct.php" method="post">
        <label for="txtId">Id Produto: </label>
        <br>
        <br>
        <input type="text" name="txtID" id="txtId" value="<?php echo($produto["idProduto"]); ?>"disable>
        <br>
        <br>
        <label for="txtProduto">Nome do Produto: </label>
        <br>
        <input type="text" name="txtProduto" id="txtProduto" value="<?php echo($produto["nmProduto"]); ?>" required autofocus placeholder="Nome do Produto">
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
                    <option value="<?php  echo($exibir["idCategoria"]); ?>" <?php echo($exibir["idCategoria"] == $produto["idCategoria"])?"selected":"";?>>

                    <?php  echo($exibir["nmCategoria"]); ?> </option>

                    <?php
                }
            ?>

        </select>
        <br><br>
        <label for="txtDescProduto">Descrição do Produto</label>
        <br>
        <textarea name="txtDescProduto" id="txtDescProduto" cols="30" rows="10" placeholder="Descrição do Produto"><?php echo($produto["descProduto"]);?></textarea>
        <br><br>
        <input type="submit" value="Salvar">
        <input type="reset" value="Calcelar">

    </form>
</body>
</html>p
                $sql = "SELECT * FROM tbcategoria ORDER BY nmCategoria asc";
                $registros = $conn->query($sql);
                while($exibir = $registros->fetch_assoc()) {
                    ?>
                    <option value="<?php  echo($exibir["idCategoria"]); ?>" <?php echo($exibir["idCategoria"] == $produto["idCategoria"])?"selected":"";?>>

                    <?php  echo($exibir["nmCategoria"]); ?> </option>

                    <?php
                }
            ?>

        </select>
        <br><br>
        <label for="txtDescProduto">Descrição do Produto</label>
        <br>
        <textarea name="txtDescProduto" id="txtDescProduto" cols="30" rows="10" placeholder="Descrição do Produto"><?php echo($produto["descProduto"]);?></textarea>
        <br><br>
        <input type="submit" value="Salvar">
        <input type="reset" value="Calcelar">

    </form>
</body>
</html>