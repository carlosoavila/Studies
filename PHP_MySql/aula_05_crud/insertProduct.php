<?php 
    include_once("conexao.php");

    $nmProduto = $_POST["txtProduto"];
    $categoria = $_POST["ddlCategoria"];
    $descProduto = $_POST["txtDescProduto"];

    $sql = "INSERT INTO tbprodutos (nmProduto, idCategoria, descProduto)";
    $sql .= "VALUES ('$nmProduto', $categoria, '$descProduto')";

    //echo($sql);

    if($conn->query($sql) === TRUE) {
        ?>

    <script>
        alert("Registro salvo com sucesso");
        window.location = "select.php"; //Volta para a tela anterior
    </script>    

<?php        
    }else {
        ?>

    <script>
        alert("Erro ao inserir registro");
        window.history.back();
    </script>


<?php
    }

?>