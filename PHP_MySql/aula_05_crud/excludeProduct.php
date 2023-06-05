<?php 
    include_once("conexao.php");

    $idProduto = $_GET["idProduto"];

    $sql = "DELETE FROM tbprodutos WHERE idProduto = $idProduto";

    if($conn->query($sql) === TRUE) {
        ?>

        <script>
            alert("Registro foi excluido com sucesso");
            window.location = "bemVindo.php";
        </script>

<?php
    } else {
  ?>

        <script>
            alert("Erro ao excluir o registro");
            window.location = "bemVindo.php";
        </script>


<?php
    }





?>